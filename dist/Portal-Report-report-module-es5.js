(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Portal-Report-report-module"],{

/***/ "./node_modules/dom-to-image/src/dom-to-image.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-to-image/src/dom-to-image.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global) {
    'use strict';

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false
    };

    var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };

    if (true)
        module.exports = domtoimage;
    else
        {}


    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node)
            .then(function (node) {
                return cloneNode(node, options.filter, true);
            })
            .then(embedFonts)
            .then(inlineImages)
            .then(applyOptions)
            .then(function (clone) {
                return makeSvgDataUri(clone,
                    options.width || util.width(node),
                    options.height || util.height(node)
                );
            });

        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;

            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';

            if (options.style)
                Object.keys(options.style).forEach(function (property) {
                    clone.style[property] = options.style[property];
                });

            return clone;
        }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
        return draw(node, options || {})
            .then(function (canvas) {
                return canvas.getContext('2d').getImageData(
                    0,
                    0,
                    util.width(node),
                    util.height(node)
                ).data;
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
        return draw(node, options || {})
            .then(function (canvas) {
                return canvas.toDataURL();
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
        options = options || {};
        return draw(node, options)
            .then(function (canvas) {
                return canvas.toDataURL('image/jpeg', options.quality || 1.0);
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
        return draw(node, options || {})
            .then(util.canvasToBlob);
    }

    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if(typeof(options.imagePlaceholder) === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if(typeof(options.cacheBust) === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }
    }

    function draw(domNode, options) {
        return toSvg(domNode, options)
            .then(util.makeImage)
            .then(util.delay(100))
            .then(function (image) {
                var canvas = newCanvas(domNode);
                canvas.getContext('2d').drawImage(image, 0, 0);
                return canvas;
            });

        function newCanvas(domNode) {
            var canvas = document.createElement('canvas');
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);

            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
        }
    }

    function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();

        return Promise.resolve(node)
            .then(makeNodeCopy)
            .then(function (clone) {
                return cloneChildren(node, clone, filter);
            })
            .then(function (clone) {
                return processClone(node, clone);
            });

        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);

            return cloneChildrenInOrder(clone, util.asArray(children), filter)
                .then(function () {
                    return clone;
                });

            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function (child) {
                    done = done
                        .then(function () {
                            return cloneNode(child, filter);
                        })
                        .then(function (childClone) {
                            if (childClone) parent.appendChild(childClone);
                        });
                });
                return done;
            }
        }

        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;

            return Promise.resolve()
                .then(cloneStyle)
                .then(clonePseudoElements)
                .then(copyUserInput)
                .then(fixSvg)
                .then(function () {
                    return clone;
                });

            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);

                function copyStyle(source, target) {
                    if (source.cssText) target.cssText = source.cssText;
                    else copyProperties(source, target);

                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function (name) {
                            target.setProperty(
                                name,
                                source.getPropertyValue(name),
                                source.getPropertyPriority(name)
                            );
                        });
                    }
                }
            }

            function clonePseudoElements() {
                [':before', ':after'].forEach(function (element) {
                    clonePseudoElement(element);
                });

                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');

                    if (content === '' || content === 'none') return;

                    var className = util.uid();
                    clone.className = clone.className + ' ' + className;
                    var styleElement = document.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);

                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return document.createTextNode(selector + '{' + cssText + '}');

                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }

                        function formatCssProperties(style) {

                            return util.asArray(style)
                                .map(formatProperty)
                                .join('; ') + ';';

                            function formatProperty(name) {
                                return name + ': ' +
                                    style.getPropertyValue(name) +
                                    (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }

            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                if (!(clone instanceof SVGRectElement)) return;
                ['width', 'height'].forEach(function (attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;

                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }

    function embedFonts(node) {
        return fontFaces.resolveAll()
            .then(function (cssText) {
                var styleNode = document.createElement('style');
                node.appendChild(styleNode);
                styleNode.appendChild(document.createTextNode(cssText));
                return node;
            });
    }

    function inlineImages(node) {
        return images.inlineAll(node)
            .then(function () {
                return node;
            });
    }

    function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node)
            .then(function (node) {
                node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
                return new XMLSerializer().serializeToString(node);
            })
            .then(util.escapeXhtml)
            .then(function (xhtml) {
                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
            })
            .then(function (foreignObject) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
                    foreignObject + '</svg>';
            })
            .then(function (svg) {
                return 'data:image/svg+xml;charset=utf-8,' + svg;
            });
    }

    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };

        function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';

            return {
                'woff': WOFF,
                'woff2': WOFF,
                'ttf': 'application/font-truetype',
                'eot': 'application/vnd.ms-fontobject',
                'png': 'image/png',
                'jpg': JPEG,
                'jpeg': JPEG,
                'gif': 'image/gif',
                'tiff': 'image/tiff',
                'svg': 'image/svg+xml'
            };
        }

        function parseExtension(url) {
            var match = /\.([^\.\/]*?)$/g.exec(url);
            if (match) return match[1];
            else return '';
        }

        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
        }

        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
            return new Promise(function (resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);

                for (var i = 0; i < length; i++)
                    binaryArray[i] = binaryString.charCodeAt(i);

                resolve(new Blob([binaryArray], {
                    type: 'image/png'
                }));
            });
        }

        function canvasToBlob(canvas) {
            if (canvas.toBlob)
                return new Promise(function (resolve) {
                    canvas.toBlob(resolve);
                });

            return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }

        function uid() {
            var index = 0;

            return function () {
                return 'u' + fourRandomChars() + index++;

                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */
                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }

        function makeImage(uri) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }

        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if(domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
            }

            return new Promise(function (resolve) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                request.open('GET', url, true);
                request.send();

                var placeholder;
                if(domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if(split && split[1]) {
                        placeholder = split[1];
                    }
                }

                function done() {
                    if (request.readyState !== 4) return;

                    if (request.status !== 200) {
                        if(placeholder) {
                            resolve(placeholder);
                        } else {
                            fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                        }

                        return;
                    }

                    var encoder = new FileReader();
                    encoder.onloadend = function () {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }

                function timeout() {
                    if(placeholder) {
                        resolve(placeholder);
                    } else {
                        fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                    }
                }

                function fail(message) {
                    console.error(message);
                    resolve('');
                }
            });
        }

        function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function delay(ms) {
            return function (arg) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve(arg);
                    }, ms);
                });
            };
        }

        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
            return array;
        }

        function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
        }
    }

    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };

        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
                result.push(match[1]);
            }
            return result.filter(function (url) {
                return !util.isDataUrl(url);
            });
        }

        function inline(string, url, baseUrl, get) {
            return Promise.resolve(url)
                .then(function (url) {
                    return baseUrl ? util.resolveUrl(url, baseUrl) : url;
                })
                .then(get || util.getAndEncode)
                .then(function (data) {
                    return util.dataAsUrl(data, util.mimeType(url));
                })
                .then(function (dataUrl) {
                    return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
                });

            function urlAsRegex(url) {
                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
        }

        function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);

            return Promise.resolve(string)
                .then(readUrls)
                .then(function (urls) {
                    var done = Promise.resolve(string);
                    urls.forEach(function (url) {
                        done = done.then(function (string) {
                            return inline(string, url, baseUrl, get);
                        });
                    });
                    return done;
                });

            function nothingToInline() {
                return !shouldProcess(string);
            }
        }
    }

    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };

        function resolveAll() {
            return readAll(document)
                .then(function (webFonts) {
                    return Promise.all(
                        webFonts.map(function (webFont) {
                            return webFont.resolve();
                        })
                    );
                })
                .then(function (cssStrings) {
                    return cssStrings.join('\n');
                });
        }

        function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets))
                .then(getCssRules)
                .then(selectWebFontRules)
                .then(function (rules) {
                    return rules.map(newWebFont);
                });

            function selectWebFontRules(cssRules) {
                return cssRules
                    .filter(function (rule) {
                        return rule.type === CSSRule.FONT_FACE_RULE;
                    })
                    .filter(function (rule) {
                        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
                    });
            }

            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function (sheet) {
                    try {
                        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                    } catch (e) {
                        console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                    }
                });
                return cssRules;
            }

            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function () {
                        return webFontRule.style.getPropertyValue('src');
                    }
                };
            }
        }
    }

    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };

        function newImage(element) {
            return {
                inline: inline
            };

            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();

                return Promise.resolve(element.src)
                    .then(get || util.getAndEncode)
                    .then(function (data) {
                        return util.dataAsUrl(data, util.mimeType(element.src));
                    })
                    .then(function (dataUrl) {
                        return new Promise(function (resolve, reject) {
                            element.onload = resolve;
                            element.onerror = reject;
                            element.src = dataUrl;
                        });
                    });
            }
        }

        function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);

            return inlineBackground(node)
                .then(function () {
                    if (node instanceof HTMLImageElement)
                        return newImage(node).inline();
                    else
                        return Promise.all(
                            util.asArray(node.childNodes).map(function (child) {
                                return inlineAll(child);
                            })
                        );
                });

            function inlineBackground(node) {
                var background = node.style.getPropertyValue('background');

                if (!background) return Promise.resolve(node);

                return inliner.inlineAll(background)
                    .then(function (inlined) {
                        node.style.setProperty(
                            'background',
                            inlined,
                            node.style.getPropertyPriority('background')
                        );
                    })
                    .then(function () {
                        return node;
                    });
            }
        }
    }
})(this);


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/amazonreport/amazonreport.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/amazonreport/amazonreport.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"lists.from\" (focus)=\"picker.open()\"\n                                placeholder=\"Choose a Start date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" [(ngModel)]=\"lists.to\" (focus)=\"picker1.open()\"\n                                placeholder=\"Choose an End date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker2\" [(ngModel)]=\"lists.duedate\"\n                                (focus)=\"picker2.open()\" placeholder=\"Choose a Due date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker2></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <!-- <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select User Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let u of lists.Userlist\" [value]=\"u.id\">\n                                    {{u.userinfo}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div> -->\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select User Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Userlist|selectfilter:lists.searchuser:'userinfo'\"\n                                    [value]=\"u.id\">\n                                    {{u.userinfo}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n\n                    <!-- <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType=='Super Admin' ||lists.userType=='Manager'\">\n                        <mat-form-field>\n                            <mat-label>Select Admin Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.adminid\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let u of lists.Adminlist\" [value]=\"u.id\">\n                                    {{u.name}} </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div> -->\n\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\"\n                        *ngIf=\"lists.userType=='Super Admin' ||lists.userType=='Manager'\">\n                        <mat-form-field>\n                            <mat-label>Select Admin Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.adminid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser1\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Adminlist|selectfilter:lists.searchuser1:'name'\"\n                                    [value]=\"u.id\">\n                                    {{u.name}} </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <mat-label>Order By</mat-label>\n                            <mat-select [(ngModel)]=\"lists.order\">\n                                <mat-option *ngFor=\"let u of lists.orderlist\" [value]=\"u.value\">\n                                    {{u.name}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                        <button mat-raised-button color=\"primary\" (click)=\"ViewReport()\">View Report</button>\n                    </div>\n                   \n                    <!-- <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-warning text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{lists.Totalamount}}</i>\n                                    </h2>\n                                    <small>Total Successful Bills</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-warning text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{lists.Totalamount}}</i>\n                                    </h2>\n                                    <small>Total Failed Bills</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-info text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{report.data.length}}</h2>\n                                    <small>Total Pending Bills</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div> -->\n                    <!-- <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div> -->\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"common.TableFilter(report,$event.target.value)\"\n                                placeholder=\"Search\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"75\" class=\"text-right\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <button mat-raised-button color=\"primary\"\n                            (click)=\"common.DownloadCsv('BillDeposit',report.data)\">Export Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <table mat-table matSort [dataSource]=\"report\">\n                            <ng-container matColumnDef=\"receipt\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Receipt </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.receipt}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"kno\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> KNo</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.kno}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"username\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> User Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"lastdate\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.lastdate}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"cname\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Biller Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.cname}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"billamount\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\"\n                                        aria-hidden=\"true\"> Amount</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\">\n                                        {{element.billamount}}</i></td>\n                            </ng-container>\n                            <!-- <ng-container matColumnDef=\"openbalance\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\"\n                                        aria-hidden=\"true\"> Open Balance</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\">\n                                        {{element.openbalance||0}}</i></td>\n                            </ng-container> -->\n                            <ng-container matColumnDef=\"datetime\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.datetime|date:'dd-MM-yyyy hh:mm a'}}\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"provider_Id\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Bill Type </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.provider_Id}}\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"billstatus\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i \n                                        aria-hidden=\"true\">Amazon Status</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i  aria-hidden=\"true\">\n                                        {{element.billstatus}}</i></td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"transectionid\">\n                                <th mat-header-cell *matHeaderCellDef> Amazon Order Id </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i  aria-hidden=\"true\">\n                                    {{element.transectionid}}</i></td>\n                               <!-- <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                     <a style=\"color:#F44336 !important\"\n                                        (click)=\"common.ReceiptPrint(element,'Duplicate Copy')\">\n                                        <mat-icon>print</mat-icon>\n                                    </a> \n                                </td>-->\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[15,20,25,50,100,200]\" showFirstLastButtons></mat-paginator>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/billdepositreport/billdepositreport.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/billdepositreport/billdepositreport.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"lists.from\" (focus)=\"picker.open()\"\n                                placeholder=\"Choose a Start date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" [(ngModel)]=\"lists.to\" (focus)=\"picker1.open()\"\n                                placeholder=\"Choose an End date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker2\" [(ngModel)]=\"lists.duedate\"\n                                (focus)=\"picker2.open()\" placeholder=\"Choose a Due date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker2></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <!-- <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select User Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let u of lists.Userlist\" [value]=\"u.id\">\n                                    {{u.userinfo}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div> -->\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select User Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Userlist|selectfilter:lists.searchuser:'userinfo'\"\n                                    [value]=\"u.id\">\n                                    {{u.userinfo}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n\n                    <!-- <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType=='Super Admin' ||lists.userType=='Manager'\">\n                        <mat-form-field>\n                            <mat-label>Select Admin Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.adminid\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let u of lists.Adminlist\" [value]=\"u.id\">\n                                    {{u.name}} </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div> -->\n\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\"\n                        *ngIf=\"lists.userType=='Super Admin' ||lists.userType=='Manager'\">\n                        <mat-form-field>\n                            <mat-label>Select Admin Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.adminid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser1\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Adminlist|selectfilter:lists.searchuser1:'name'\"\n                                    [value]=\"u.id\">\n                                    {{u.name}} </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <mat-label>Order By</mat-label>\n                            <mat-select [(ngModel)]=\"lists.order\">\n                                <mat-option *ngFor=\"let u of lists.orderlist\" [value]=\"u.value\">\n                                    {{u.name}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                        <button mat-raised-button color=\"primary\" (click)=\"ViewReport()\">View Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-warning text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{lists.Totalamount}}</i>\n                                    </h2>\n                                    <small>Total Bill Amount</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-info text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{report.data.length}}</h2>\n                                    <small>Total Record</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"common.TableFilter(report,$event.target.value)\"\n                                placeholder=\"Search\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"75\" class=\"text-right\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <button mat-raised-button color=\"primary\"\n                            (click)=\"common.DownloadCsv('BillDeposit',report.data)\">Export Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <table mat-table matSort [dataSource]=\"report\">\n                            <ng-container matColumnDef=\"receipt\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Receipt </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.receipt}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"kno\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> KNo</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.kno}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"username\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> User Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"lastdate\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.lastdate}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"cname\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Biller Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.cname}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"billamount\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\"\n                                        aria-hidden=\"true\"> Amount</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\">\n                                        {{element.billamount}}</i></td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"openbalance\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\"\n                                        aria-hidden=\"true\"> Open Balance</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\">\n                                        {{element.openbalance||0}}</i></td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"datetime\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.datetime|date:'dd-MM-yyyy hh:mm a'}}\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"provider_Id\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Bill Type </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.provider_Id}}\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"action\">\n                                <th mat-header-cell *matHeaderCellDef> Action </th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                    <a style=\"color:#F44336 !important\"\n                                        (click)=\"common.ReceiptPrint(element,'Duplicate Copy')\">\n                                        <mat-icon>print</mat-icon>\n                                    </a>\n                                </td>\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[15,20,25,50,100,200]\" showFirstLastButtons></mat-paginator>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/billreversal/billreversal.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/billreversal/billreversal.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n\n        <mat-tab-group>\n            <mat-tab label=\"Duplicate Bill Reverse\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\n                        <div fxLayout=\"row wrap\">\n                            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right p-r-10\">\n                                <mat-form-field>\n                                    <input matInput [matDatepicker]=\"picker\" class=\"datepicker\" [(ngModel)]=\"lists.from\" (focus)=\"picker.open()\" placeholder=\"Choose a Start date\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <mat-form-field>\n                                    <input matInput [matDatepicker]=\"picker1\" [(ngModel)]=\"lists.to\" (focus)=\"picker1.open()\" class=\"datepicker\" placeholder=\"Choose an End date\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker1></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <mat-form-field>\n                                    <input matInput (keyup)=\"common.TableFilter(lists.duplicate,$event.target.value)\" placeholder=\"Search\">\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex.gt-sm=\"75\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right m-b-10\">\n                                <button mat-raised-button color=\"primary\" (click)=\"GetDuplicateBill()\">Get Duplicate\n                                    Bills</button>\n                            </div>\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <table mat-table matSort [dataSource]=\"lists.duplicate\">\n\n\n                                    <ng-container matColumnDef=\"receipt\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Receipt </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.receipt}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"kno\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> KNo </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.kno}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"username\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> User Name </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"lastdate\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.lastdate}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"cname\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.cname}} </td>\n                                    </ng-container>\n\n                                    <ng-container matColumnDef=\"billamount\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\" aria-hidden=\"true\"> Amount</i> </th>\n                                        <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\"> {{element.billamount}}</i> </td>\n                                    </ng-container>\n\n                                    <ng-container matColumnDef=\"datetime\">\n                                        <th mat-header-cell *matHeaderCellDef> Date </th>\n                                        <td mat-cell *matCellDef=\"let element\">\n                                            {{element.datetime|date:'dd-MM-yyy hh:mm a'}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"action\">\n                                        <th mat-header-cell *matHeaderCellDef> Action </th>\n                                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                            <a style=\"color:#F44336 !important\" (click)=\"BillReverse(element)\">\n                                                Reversal\n                                            </a>\n                                        </td>\n\n                                    </ng-container>\n                                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                                </table>\n                                <mat-paginator [pageSizeOptions]=\"[10,20,25,50,100,200]\" showFirstLastButtons>\n                                </mat-paginator>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </mat-tab>\n            <mat-tab label=\"Force Bill Reverse\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\n                        <div fxLayout=\"row wrap\">\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <mat-form-field>\n                                    <input matInput [(ngModel)]=\"lists.forcesearch\" placeholder=\"Search\">\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right m-b-10\">\n                                <button mat-raised-button color=\"primary\" (click)=\"SearchReceipt()\">Search by Receipt\n                                    No.</button>\n                            </div>\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <table mat-table matSort [dataSource]=\"lists.forcelist\">\n\n\n                                    <ng-container matColumnDef=\"receipt\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Receipt </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.receipt}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"kno\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> KNo </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.kno}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"username\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> User Name </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"lastdate\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.lastdate}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"cname\">\n                                        <th mat-header-cell *matHeaderCellDef> Customer Name </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.cname}} </td>\n                                    </ng-container>\n\n                                    <ng-container matColumnDef=\"billamount\">\n                                        <th mat-header-cell *matHeaderCellDef><i class=\"fa fa-inr\" aria-hidden=\"true\"> Amount</i> </th>\n                                        <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\"> {{element.billamount}}</i> </td>\n                                    </ng-container>\n\n                                    <ng-container matColumnDef=\"datetime\">\n                                        <th mat-header-cell *matHeaderCellDef> Date </th>\n                                        <td mat-cell *matCellDef=\"let element\">\n                                            {{element.datetime|date:'dd-MM-yyy hh:mm a'}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"action\">\n                                        <th mat-header-cell *matHeaderCellDef> Action </th>\n                                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                            <a style=\"color:#F44336 !important\" (click)=\"BillReverse(element)\">\n                                                Reversal\n                                            </a>\n                                        </td>\n\n                                    </ng-container>\n                                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                                </table>\n                                <mat-paginator [pageSizeOptions]=\"[5,20,25,50,100,200]\" showFirstLastButtons>\n                                </mat-paginator>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/collection/collection.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/collection/collection.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <mat-tab-group>\n            <mat-tab label=\"View Cash Collection\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-r-10\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"myDatepicker\" [(ngModel)]=\"lists.fromdate\" (focus)=\"myDatepicker.open()\" placeholder=\"From Date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                            <mat-datepicker #myDatepicker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-r-10\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"myDatepicker1\" [(ngModel)]=\"lists.todate\" (focus)=\"myDatepicker1.open()\" placeholder=\"To Date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"myDatepicker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #myDatepicker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select User Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Userlist|selectfilter:lists.searchuser:'userinfo'\" [value]=\"u.id\">\n                                    {{u.userinfo}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right m-b-10\">\n                        <button mat-raised-button color=\"primary\" (click)=\"GetDepositcollection()\">View\n                            Collection</button>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-warning text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{lists.Totalamount}}</i></h2>\n                                    <small>Total Bill Amount</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-info text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{lists.Depositlist.data.length}}</h2>\n                                    <small>Total Record</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <div fxLayout=\"row wrap\">\n                            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <mat-form-field>\n                                    <input matInput (keyup)=\"common.TableFilter(lists.Depositlist,$event.target.value)\" placeholder=\"Search\">\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex.gt-sm=\"75\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                                <button mat-raised-button color=\"primary\" (click)=\"common.DownloadCsv('CollectionReport',lists.Depositlist.data)\">Export Report</button>\n                            </div>\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <table mat-table matSort [dataSource]=\"lists.Depositlist\">\n                                    <ng-container matColumnDef=\"receipt\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> ReceiptNo </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.receiptno}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"adminid\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Depositor </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.adminid}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"name\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Agent </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.Agent}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"transaction\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> TransactionId </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.t_id}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"status\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Payment Mode </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.t_type}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"rdate\">\n                                        <th mat-header-cell *matHeaderCellDef> Date </th>\n                                        <td mat-cell *matCellDef=\"let element\">\n                                            {{element.datetime|date:'dd-MM-yyyy hh:mm a'}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"PresentAmount\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\" aria-hidden=\"true\"> Amount</i> </th>\n                                        <td mat-cell *matCellDef=\"let element\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{element.amount}}</i> </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"action\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n                                        <td mat-cell *matCellDef=\"let element\">\n                                            <a style=\"color:#F44336 !important\" (click)=\"print(element,'Duplicate Copy')\">\n                                                <mat-icon>print</mat-icon>\n                                            </a>\n                                        </td>\n                                    </ng-container>\n                                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                                </table>\n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons>\n                                </mat-paginator>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Receive Cash\">\n                <form [formGroup]=\"collectionform\">\n                    <div fxLayout=\"row wrap\">\n                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                            <div fxLayout=\"row wrap\">\n                                <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-l-10\">\n                                    <mat-form-field>\n                                        <mat-label>Select User Name</mat-label>\n                                        <mat-select formControlName=\"agentid\">\n                                            <mat-option *ngFor=\"let u of lists.Userlist\" [value]=\"u.id\">\n                                                {{u.userinfo}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-l-10\">\n                                    <mat-form-field>\n                                        <mat-label>Select Payment Mode</mat-label>\n                                        <mat-select formControlName=\"type\">\n                                            <mat-option>None</mat-option>\n                                            <mat-option value=\"Cash\">Cash</mat-option>\n                                            <mat-option value=\"Bank\">Bank</mat-option>\n                                            <mat-option value=\"Online\">Online</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\n                                    <mat-form-field>\n                                        <input matInput formControlName=\"transactionid\" type=\"text\" placeholder=\"Transaction Id\">\n                                    </mat-form-field>\n                                </div>\n                                <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\n                                    <mat-form-field>\n                                        <input matInput type=\"number\" formControlName=\"amount\" placeholder=\"Amount\">\n                                    </mat-form-field>\n                                </div>\n                                <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                                    <button mat-raised-button color=\"primary\" [disabled]=\"!collectionform.valid\" (click)=\"CashDeposit()\">Deposit</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </mat-tab>\n        </mat-tab-group>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/creditreport/creditreport.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/creditreport/creditreport.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right p-r-10\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"lists.from\" (focus)=\"picker.open()\" placeholder=\"Choose a Start date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right p-r-10\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" [(ngModel)]=\"lists.to\" (focus)=\"picker1.open()\" placeholder=\"Choose an End date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select User Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Userlist|selectfilter:lists.searchuser:'userinfo'\" [value]=\"u.id\">\n                                    {{u.userinfo}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right m-b-10\">\n                        <button mat-raised-button color=\"primary\" (click)=\"GetMyCreditHistory()\">View Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-warning text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{lists.TotalAmount}}</i></h2>\n                                    <small>Total Amount Credited</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-info text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{lists.Creditlist.data.length}}</h2>\n                                    <small>Total Record</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"common.TableFilter(lists.Creditlist,$event.target.value)\" placeholder=\"Search\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"75\" class=\"text-right\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <button mat-raised-button color=\"primary\" (click)=\"common.DownloadCsv('CreditReport',lists.Creditlist.data)\">Export Report</button>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <table mat-table matSort [dataSource]=\"lists.Creditlist\">\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}}-{{element.cityname}}</td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"amount\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\" aria-hidden=\"true\"> Amount</i></th>\n                                <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\"> {{element.amount}}</i> </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"type\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Type</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"datetime\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.datetime}}\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"message\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Message </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[5,10, 20,25,50,100]\" showFirstLastButtons></mat-paginator>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/due/due.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/due/due.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>due works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/payu/payu.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/payu/payu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"lists.from\" (focus)=\"picker.open()\"\n                                placeholder=\"Choose a Start date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" [(ngModel)]=\"lists.to\" (focus)=\"picker1.open()\"\n                                placeholder=\"Choose an End date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n               \n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"text-right\">\n                        <button mat-raised-button color=\"primary\" (click)=\"ViewReport()\">View Report</button>\n                    </div>\n                    \n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"common.TableFilter(report,$event.target.value)\"\n                                placeholder=\"Search\">\n                        </mat-form-field>\n                    </div>\n                  \n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <table mat-table matSort [dataSource]=\"report\">\n                            <ng-container matColumnDef=\"receipt\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Transaction NO </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.txnid}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"kno\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Transaction Medium</th>\n                                <td mat-cell *matCellDef=\"let element\">Payu Money </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"username\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> User Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"lastdate\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Transaction Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.pdatetime}} </td>\n                            </ng-container>\n                           \n                            <ng-container matColumnDef=\"billamount\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\"\n                                        aria-hidden=\"true\"> Amount</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\">\n                                        {{element.info.net_amount_debit}}</i></td>\n                            </ng-container>\n                         <ng-container matColumnDef=\"action\">\n                                <th mat-header-cell *matHeaderCellDef> Action </th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                    <a style=\"color:#F44336 !important\"\n                                        (click)=\"common.PayuReceipt(element,'Duplicate Copy')\">\n                                        <mat-icon>print</mat-icon>\n                                    </a>\n                                </td>\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[15,20,25,50,100,200]\" showFirstLastButtons></mat-paginator>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/reversed/reversed.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/reversed/reversed.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"lists.from\" (focus)=\"picker.open()\" placeholder=\"Choose a Start date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" [(ngModel)]=\"lists.to\" (focus)=\"picker1.open()\" placeholder=\"Choose an End date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select User Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Userlist|selectfilter:lists.searchuser:'userinfo'\" [value]=\"u.id\">\n                                    {{u.userinfo}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType=='Super Admin' ||lists.userType=='Manager'\">\n                        <mat-form-field>\n                            <mat-label>Select Admin Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.adminid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser1\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Adminlist|selectfilter:lists.searchuser1:'name'\" [value]=\"u.id\">\n                                    {{u.name}} </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right m-b-10\">\n                        <button mat-raised-button color=\"primary\" (click)=\"ViewReport()\">View Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-warning text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{lists.Totalamount}}</h2>\n                                    <small>Total Bill Reversed</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"common.TableFilter(report,$event.target.value)\" placeholder=\"Search\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"75\" class=\"text-right m-b-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <button mat-raised-button color=\"primary\" (click)=\"common.DownloadCsv('ReversedBillReport',report.data)\">Export Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <table mat-table matSort [dataSource]=\"report\">\n                            <ng-container matColumnDef=\"receipt\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Receipt </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.receipt}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"kno\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> KNo</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.kno}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"username\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Depositor Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.depositername}} </td>\n                            </ng-container>\n                            \n                            <ng-container matColumnDef=\"lastdate\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.lastdate}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"cname\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Biller Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.cname}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"billamount\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\" aria-hidden=\"true\"> Amount</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\"> {{element.billamount}}</i> </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"datetime\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Reversed Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.deletedatetime|date:'dd-MM-yyyy HH:MM a'}}\n                                </td>\n                            </ng-container>\n\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[15,20,25,50,100,200]\" showFirstLastButtons></mat-paginator>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/usercollection/usercollection.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/usercollection/usercollection.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"33.33\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" [(ngModel)]=\"lists.from\" placeholder=\"Choose a Start date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"33.33\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" (focus)=\"picker1.open()\" [(ngModel)]=\"lists.to\" placeholder=\"Choose an End date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType=='Super Admin' ||lists.userType=='Manager'\">\n                        <mat-form-field>\n                            <mat-label>Select Admin Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.adminid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser1\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Adminlist|selectfilter:lists.searchuser1:'name'\" [value]=\"u.id\">\n                                    {{u.name}} </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" class=\"text-right m-b-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <button mat-raised-button color=\"primary\" class=\"m-r-10\" (click)=\"ViewReport()\">View\n                            Report</button> <button mat-raised-button color=\"primary\" (click)=\"printDiv()\">Print Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div id=\"my-node\" fxLayout=\"row wrap\">\n                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngFor=\"let r of report\">\n                            <div fxLayout=\"row wrap\" class=\"m-t-30\" style=\"background: rgba(0, 0, 0, 0.5);\n                        color: white;\">\n                                <div fxFlex.gt-sm=\"25\" class=\"b-l b-b b-r b-t p-l-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                    {{r.name}}-({{r.cityname}})\n                                </div>\n                                <div fxFlex.gt-sm=\"25\" class=\"b-r b-b b-t p-l-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                    {{r.mobile}}\n                                </div>\n                                <div fxFlex.gt-sm=\"25\" class=\"b-r b-b b-t p-l-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                    <b> Amount:<i class=\"fa fa-inr\" aria-hidden=\"true\"> {{r.totalamount}}</i></b>\n                                </div>\n                                <div fxFlex.gt-sm=\"25\" class=\"p-l-10 b-r b-b b-t\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                    <b>Bills:</b> {{r.totalbills}}\n                                </div>\n                            </div>\n                            <div fxLayout=\"row wrap\" class=\"m-t-10\">\n\n                            </div>\n                            <table mat-table matSort [dataSource]=\"r.child\">\n                                <ng-container matColumnDef=\"no\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n                                    <td mat-cell *matCellDef=\"let element;let i=index\"> {{i+1}} </td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Agent Name</th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"mobile\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile Number </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"TotalAmount\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\" aria-hidden=\"true\"> Total Amount</i> </th>\n                                    <td mat-cell *matCellDef=\"let element\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{element.TotalAmount}}</i> </td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"Totalbill\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Total Deposited Bills </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.Totalbill}} </td>\n                                </ng-container>\n                                <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/userwork/userwork.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Report/userwork/userwork.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"25\" class=\"p-l-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" [(ngModel)]=\"lists.from\" placeholder=\"Choose a Start date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-l-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" (focus)=\"picker1.open()\" [(ngModel)]=\"lists.to\" placeholder=\"Choose an End date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-l-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"lists.duedate\" (focus)=\"picker2.open()\" [matDatepicker]=\"picker2\" placeholder=\"Due date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker2></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-l-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select Depositor</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let d of lists.depositorlist\" [value]=\"d.id\">\n                                    {{d.name}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-l-10 p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <mat-label>Status</mat-label>\n                            <mat-select [(ngModel)]=\"lists.status\">\n                                <mat-option>None</mat-option>\n                                <mat-option value=\"On Hold\">On Hold</mat-option>\n                                <mat-option value=\"Success\">Success</mat-option>\n                                <mat-option value=\"Assign\">Assign</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <mat-label>Order By</mat-label>\n                            <mat-select [(ngModel)]=\"lists.order\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let o of lists.orderlist\" [value]=\"o.value\">\n                                    {{o.name}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                        <button mat-raised-button color=\"primary\" (click)=\"ViewReport()\">View Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-danger text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{lists.onholdlist}}</h2>\n                                    <small>On Hold</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-info text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{lists.successlist}}</h2>\n                                    <small>Success</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n                    <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-warning text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{lists.assignlist}}</h2>\n                                    <small>Assign</small>\n                                </div>\n                            </mat-card>\n                        </a>\n\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"comman.TableFilter(report,$event.target.value)\" placeholder=\"Search\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"75\" class=\"text-right\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <button mat-raised-button color=\"primary\" (click)=\"comman.DownloadCsv('UserWorkReport',report.data)\">Export Report</button>\n                    </div>\n                    <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <table mat-table matSort [dataSource]=\"report\">\n                            <ng-container matColumnDef=\"receipt\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Receipt </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.receipt}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"kno\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> KNo</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.kno}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"cname\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.cname}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"mobile\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile Number </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"billamount\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\" aria-hidden=\"true\"> Bill Amount</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{element.billamount}}</i> </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"lastdate\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.lastdate}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"username\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Depositor </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"billstatus\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Bill Status </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.billstatus}} </td>\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/Portal/Report/amazonreport/amazonreport.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Portal/Report/amazonreport/amazonreport.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvYW1hem9ucmVwb3J0L2FtYXpvbnJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Portal/Report/amazonreport/amazonreport.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Portal/Report/amazonreport/amazonreport.component.ts ***!
  \**********************************************************************/
/*! exports provided: AmazonreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmazonreportComponent", function() { return AmazonreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AmazonreportComponent = /** @class */ (function () {
    function AmazonreportComponent(common) {
        this.common = common;
        this.hide = true;
        this.lists = {};
        this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['receipt', 'kno', 'transectionid', 'cname', 'provider_Id', 'billamount', 'billstatus'];
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.Totalamount = 0;
        this.lists.orderlist = [{ name: "Descending", value: 'desc' }, { name: "Ascending", value: 'asc' }];
        this.GetUserList();
        this.GetAdminList();
    }
    AmazonreportComponent.prototype.ngOnInit = function () {
        this.report.paginator = this.paginator;
        this.report.sort = this.sort;
        this.lists.userType = localStorage.getItem("UserType");
    };
    AmazonreportComponent.prototype.ViewReport = function () {
        var _this = this;
        this.lists.Multiple = false;
        this.lists.userids = false;
        this.lists.from = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.from).format("YYYY-MM-DD");
        this.lists.to = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.to).format("YYYY-MM-DD");
        this.lists.userType = localStorage.getItem("UserType");
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.lists.userid = 0;
        }
        else if (localStorage.getItem("UserType") == "Admin") {
            if (!this.lists.agentid) {
                this.lists.userids = [];
                this.lists.Userlist.forEach(function (element) {
                    _this.lists.userids.push(element.id);
                });
                this.lists.Multiple = true;
                this.lists.userid = localStorage.getItem("UserId");
            }
        }
        else {
            this.lists.userid = localStorage.getItem("UserId");
        }
        if (this.lists.agentid) {
            this.lists.userid = this.lists.agentid;
        }
        if (this.lists.adminid) {
            this.lists.userids = [];
            this.lists.Userlist.forEach(function (element) {
                if (element.adminid == _this.lists.adminid) {
                    _this.lists.userids.push(element.id);
                }
            });
        }
        this.lists.myduedate = "";
        if (this.lists.duedate) {
            var duedate = new Date(this.lists.duedate);
            var fduedate = moment__WEBPACK_IMPORTED_MODULE_3__(duedate).format("DD-MM-YYYY");
            this.lists.myduedate = fduedate;
        }
        this.common.PostMethod('BillReport', this.lists).then(function (res) {
            _this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data || []);
            console.log(_this.report);
            _this.report.paginator = _this.paginator;
            _this.report.sort = _this.sort;
            _this.lists.Totalamount = 0;
            if (_this.lists.duedate) {
                _this.lists.duedate = "";
            }
            res.Data.forEach(function (element) {
                _this.lists.Totalamount = _this.lists.Totalamount + element.billamount;
            });
        });
    };
    AmazonreportComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.common.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
        else {
            this.common.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
    };
    AmazonreportComponent.prototype.GetAdminList = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Admin" }).then(function (res) {
            _this.lists.Adminlist = res.Data;
        });
    };
    AmazonreportComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AmazonreportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AmazonreportComponent.prototype, "sort", void 0);
    AmazonreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amazonreport',
            template: __webpack_require__(/*! raw-loader!./amazonreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/amazonreport/amazonreport.component.html"),
            styles: [__webpack_require__(/*! ./amazonreport.component.css */ "./src/app/Portal/Report/amazonreport/amazonreport.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], AmazonreportComponent);
    return AmazonreportComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/billdepositreport/billdepositreport.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Portal/Report/billdepositreport/billdepositreport.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvYmlsbGRlcG9zaXRyZXBvcnQvYmlsbGRlcG9zaXRyZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Report/billdepositreport/billdepositreport.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Portal/Report/billdepositreport/billdepositreport.component.ts ***!
  \********************************************************************************/
/*! exports provided: BilldepositreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilldepositreportComponent", function() { return BilldepositreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BilldepositreportComponent = /** @class */ (function () {
    function BilldepositreportComponent(common) {
        this.common = common;
        this.hide = true;
        this.lists = {};
        this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['receipt', 'kno', 'username', 'lastdate', 'openbalance', 'cname', 'provider_Id', 'billamount', 'datetime', 'action'];
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.Totalamount = 0;
        this.lists.orderlist = [{ name: "Descending", value: 'desc' }, { name: "Ascending", value: 'asc' }];
        this.GetUserList();
        this.GetAdminList();
    }
    BilldepositreportComponent.prototype.ngOnInit = function () {
        this.report.paginator = this.paginator;
        this.report.sort = this.sort;
        this.lists.userType = localStorage.getItem("UserType");
    };
    BilldepositreportComponent.prototype.ViewReport = function () {
        var _this = this;
        this.lists.Multiple = false;
        this.lists.userids = false;
        this.lists.from = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.from).format("YYYY-MM-DD");
        this.lists.to = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.to).format("YYYY-MM-DD");
        this.lists.userType = localStorage.getItem("UserType");
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.lists.userid = 0;
        }
        else if (localStorage.getItem("UserType") == "Admin") {
            if (!this.lists.agentid) {
                this.lists.userids = [];
                this.lists.Userlist.forEach(function (element) {
                    _this.lists.userids.push(element.id);
                });
                this.lists.Multiple = true;
                this.lists.userid = localStorage.getItem("UserId");
            }
        }
        else {
            this.lists.userid = localStorage.getItem("UserId");
        }
        if (this.lists.agentid) {
            this.lists.userid = this.lists.agentid;
        }
        if (this.lists.adminid) {
            this.lists.userids = [];
            this.lists.Userlist.forEach(function (element) {
                if (element.adminid == _this.lists.adminid) {
                    _this.lists.userids.push(element.id);
                }
            });
        }
        this.lists.myduedate = "";
        if (this.lists.duedate) {
            var duedate = new Date(this.lists.duedate);
            var fduedate = moment__WEBPACK_IMPORTED_MODULE_3__(duedate).format("DD-MM-YYYY");
            this.lists.myduedate = fduedate;
        }
        this.common.PostMethod('BillReport', this.lists).then(function (res) {
            _this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data || []);
            console.log(_this.report);
            _this.report.paginator = _this.paginator;
            _this.report.sort = _this.sort;
            _this.lists.Totalamount = 0;
            if (_this.lists.duedate) {
                _this.lists.duedate = "";
            }
            res.Data.forEach(function (element) {
                _this.lists.Totalamount = _this.lists.Totalamount + element.billamount;
            });
        });
    };
    BilldepositreportComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.common.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
        else {
            this.common.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
    };
    BilldepositreportComponent.prototype.GetAdminList = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Admin" }).then(function (res) {
            _this.lists.Adminlist = res.Data;
        });
    };
    BilldepositreportComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], BilldepositreportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], BilldepositreportComponent.prototype, "sort", void 0);
    BilldepositreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billdepositreport',
            template: __webpack_require__(/*! raw-loader!./billdepositreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/billdepositreport/billdepositreport.component.html"),
            styles: [__webpack_require__(/*! ./billdepositreport.component.css */ "./src/app/Portal/Report/billdepositreport/billdepositreport.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], BilldepositreportComponent);
    return BilldepositreportComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/billreversal/billreversal.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Portal/Report/billreversal/billreversal.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvYmlsbHJldmVyc2FsL2JpbGxyZXZlcnNhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Portal/Report/billreversal/billreversal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Portal/Report/billreversal/billreversal.component.ts ***!
  \**********************************************************************/
/*! exports provided: BillreversalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillreversalComponent", function() { return BillreversalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillreversalComponent = /** @class */ (function () {
    function BillreversalComponent(common) {
        this.common = common;
        this.hide = true;
        this.lists = {};
        this.duplicate = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['receipt', 'kno', 'username', 'lastdate', 'cname', 'billamount', 'datetime', 'action'];
        this.lists.billtab = 'duplicate';
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.Backgroundcolor = ["#FFBDAF", "#E5FFA8", "#A8FFD6", "#A8C8FF", "#F9A8FF"];
        this.GetDuplicateBill();
        this.lists.orderlist = [{ name: "Descending", value: 'desc' }, { name: "Ascending", value: 'asc' }];
    }
    BillreversalComponent.prototype.ngOnInit = function () {
    };
    BillreversalComponent.prototype.GetDuplicateBill = function () {
        var _this = this;
        var from = moment__WEBPACK_IMPORTED_MODULE_2__(this.lists.from).format("YYYY-MM-DD");
        var to = moment__WEBPACK_IMPORTED_MODULE_2__(this.lists.to).format("YYYY-MM-DD");
        this.common.PostMethod("FindSameBill", { from: from, to: to }).then(function (res) {
            _this.lists.duplicate = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data);
            _this.lists.duplicate.paginator = _this.paginator;
            _this.lists.duplicate.sort = _this.sort;
        });
    };
    BillreversalComponent.prototype.SearchBill = function () {
        var _this = this;
        this.common.PostMethod("FindBill", { kno: this.lists.kno, depositdate: this.lists.depositedate }).then(function (res) {
            _this.lists.forcelist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data);
        });
    };
    BillreversalComponent.prototype.BillReverse = function (ev) {
        var _this = this;
        this.common.ConfirmMessage("Confirm Do you want to reverse this bill?", function (result) {
            if (result) {
                console.log(ev);
                ev.adminid = localStorage.getItem("UserId");
                _this.common.PostMethod("BillReverse", ev).then(function (res) {
                    if (res.Status == 1) {
                        _this.common.ToastMessage("Success", res.Message);
                        _this.GetDuplicateBill();
                    }
                    else {
                        _this.common.ToastMessage("Failed", res.Message);
                    }
                });
            }
        });
    };
    BillreversalComponent.prototype.SearchReceipt = function () {
        var _this = this;
        this.common.PostMethod("SearchReceipt", { search: this.lists.forcesearch }).then(function (res) {
            console.log(res.Data);
            _this.lists.forcelist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data);
        });
    };
    BillreversalComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], BillreversalComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], BillreversalComponent.prototype, "sort", void 0);
    BillreversalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billreversal',
            template: __webpack_require__(/*! raw-loader!./billreversal.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/billreversal/billreversal.component.html"),
            styles: [__webpack_require__(/*! ./billreversal.component.css */ "./src/app/Portal/Report/billreversal/billreversal.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], BillreversalComponent);
    return BillreversalComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/collection/collection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Portal/Report/collection/collection.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Portal/Report/collection/collection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Portal/Report/collection/collection.component.ts ***!
  \******************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(common, fb) {
        this.common = common;
        this.fb = fb;
        this.hide = true;
        this.lists = {};
        this.lists.Totalamount = 0;
        this.lists.Depositlist = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.lists.fromdate = new Date();
        this.lists.todate = new Date();
        this.lists.displayedColumns = ['receipt', 'adminid', 'name', 'transaction', 'status', 'rdate', 'PresentAmount', 'action'];
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.collectionform = this.fb.group({
            agentid: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            transactionid: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            userid: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](localStorage.getItem("UserId"))
        });
    };
    CollectionComponent.prototype.ngAfterViewInit = function () {
        this.GetUserList();
        this.GetDepositcollection();
    };
    CollectionComponent.prototype.GetDepositcollection = function () {
        var _this = this;
        var id = localStorage.getItem("UserId");
        if (localStorage.getItem("UserType") == 'Super Admin') {
            id = 0;
        }
        var from = moment__WEBPACK_IMPORTED_MODULE_4__(this.lists.fromdate).format("YYYY-MM-DD");
        var to = moment__WEBPACK_IMPORTED_MODULE_4__(this.lists.fromdate).format("YYYY-MM-DD");
        var agentid = 0;
        if (this.lists.agentid) {
            agentid = this.lists.agentid;
        }
        this.common.GetMethod("GetDailyDeposit?id=" + id + "&from=" + from + "&to=" + to + "&agentid=" + agentid).then(function (res) {
            _this.lists.Depositlist = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.Data || []);
            res.Data.forEach(function (element) {
                _this.lists.Totalamount = _this.lists.Totalamount + parseInt(element.amount);
            });
            _this.lists.Depositlist.paginator = _this.paginator;
            _this.lists.Depositlist.sort = _this.sort;
        });
    };
    CollectionComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == "Super Admin") {
            this.common.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
            });
        }
        else {
            this.common.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
            });
        }
    };
    CollectionComponent.prototype.CashDeposit = function () {
        var _this = this;
        this.lists.RecieptNO = new Date().valueOf() + localStorage.getItem("UserId");
        this.collectionform.value.receiptno = this.lists.RecieptNO;
        this.common.PostMethod("DailyDeposit", this.collectionform.value).then(function (res) {
            if (res.Status == 1) {
                _this.common.ToastMessage("Success", res.Message);
                _this.print(_this.collectionform.value);
                _this.GetDepositcollection();
                _this.collectionform.reset();
                _this.collectionform.controls["userid"].setValue(localStorage.getItem("UserId"));
            }
            else {
                _this.common.ToastMessage("Fail", res.Message);
            }
        });
    };
    CollectionComponent.prototype.print = function (ev) {
        var Depositor = JSON.parse(localStorage.getItem("UserProfile"));
        var agentname = "";
        this.lists.Userlist.forEach(function (element) {
            if (element.id == ev.agentid) {
                agentname = element.name;
            }
        });
        ev.depositorname = Depositor.name;
        ev.agentname = agentname;
        ev.datetime = new Date();
        ev.RecieptNO = this.lists.RecieptNO;
        this.common.CollectionReceipt(ev, '');
    };
    CollectionComponent.prototype.Reprint = function (ev) {
        ev.RecieptNo = ev.receiptno;
        var Depositor = JSON.parse(localStorage.getItem("UserProfile"));
        ev.agentname = ev.Agent;
        ev.type = ev.t_type;
        ev.transactionid = ev.t_id;
        ev.depositorname = Depositor.name;
        this.common.CollectionReceipt(ev, 'Duplicate Copy');
    };
    CollectionComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CollectionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CollectionComponent.prototype, "sort", void 0);
    CollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__(/*! raw-loader!./collection.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.css */ "./src/app/Portal/Report/collection/collection.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/creditreport/creditreport.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Portal/Report/creditreport/creditreport.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvY3JlZGl0cmVwb3J0L2NyZWRpdHJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Portal/Report/creditreport/creditreport.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Portal/Report/creditreport/creditreport.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreditreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditreportComponent", function() { return CreditreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreditreportComponent = /** @class */ (function () {
    function CreditreportComponent(common) {
        this.common = common;
        this.hide = true;
        this.lists = {};
        this.lists.TotalAmount = 0;
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.displayedColumns = ['name', 'amount', 'type', 'datetime', 'message'];
        this.GetMyCreditHistory();
        this.GetUserList();
        this.lists.Creditlist = [];
        this.lists.Userlist = [];
        this.lists.UserType = localStorage.getItem("UserType");
    }
    CreditreportComponent.prototype.ngOnInit = function () {
        this.lists.Creditlist.paginator = this.paginator;
        this.lists.Creditlist.sort = this.sort;
    };
    CreditreportComponent.prototype.GetMyCreditHistory = function () {
        var _this = this;
        var UserId = localStorage.getItem("UserId");
        var from = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.from).format("YYYY-MM-DD");
        var to = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.to).format("YYYY-MM-DD");
        if (localStorage.getItem("UserType") == "Super Admin") {
            UserId = 0;
        }
        if (this.lists.agentid) {
            UserId = this.lists.agentid;
        }
        this.common.GetMethod('UserCreditHistory?Id=' + UserId + "&from=" + from + "&to=" + to).then(function (res) {
            _this.lists.Creditlist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data || []);
            res.Data.forEach(function (element) {
                _this.lists.TotalAmount = _this.lists.TotalAmount + parseInt(element.amount);
            });
            _this.lists.Creditlist.paginator = _this.paginator;
            _this.lists.Creditlist.sort = _this.sort;
        });
    };
    CreditreportComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == 'Super Admin') {
            this.common.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
            });
        }
        else {
            this.common.GetMethod("GetUserInfo?userid=" + localStorage.getItem('UserId')).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
            });
        }
    };
    CreditreportComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CreditreportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CreditreportComponent.prototype, "sort", void 0);
    CreditreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creditreport',
            template: __webpack_require__(/*! raw-loader!./creditreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/creditreport/creditreport.component.html"),
            styles: [__webpack_require__(/*! ./creditreport.component.css */ "./src/app/Portal/Report/creditreport/creditreport.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], CreditreportComponent);
    return CreditreportComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/due/due.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Portal/Report/due/due.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvZHVlL2R1ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Portal/Report/due/due.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Portal/Report/due/due.component.ts ***!
  \****************************************************/
/*! exports provided: DueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DueComponent", function() { return DueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DueComponent = /** @class */ (function () {
    function DueComponent() {
    }
    DueComponent.prototype.ngOnInit = function () {
    };
    DueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-due',
            template: __webpack_require__(/*! raw-loader!./due.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/due/due.component.html"),
            styles: [__webpack_require__(/*! ./due.component.css */ "./src/app/Portal/Report/due/due.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DueComponent);
    return DueComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/payu/payu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Portal/Report/payu/payu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvcGF5dS9wYXl1LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Portal/Report/payu/payu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Portal/Report/payu/payu.component.ts ***!
  \******************************************************/
/*! exports provided: PayuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayuComponent", function() { return PayuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayuComponent = /** @class */ (function () {
    function PayuComponent(common) {
        this.common = common;
        this.hide = true;
        this.lists = {};
        this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['receipt', 'kno', 'username', 'lastdate', 'billamount', 'action'];
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.Totalamount = 0;
        this.lists.orderlist = [{ name: "Descending", value: 'desc' }, { name: "Ascending", value: 'asc' }];
        this.GetUserList();
        this.GetAdminList();
    }
    PayuComponent.prototype.ngOnInit = function () {
        this.report.paginator = this.paginator;
        this.report.sort = this.sort;
        this.lists.userType = localStorage.getItem("UserType");
    };
    PayuComponent.prototype.ViewReport = function () {
        var _this = this;
        this.lists.from = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.from).format("YYYY-MM-DD");
        this.lists.to = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.to).format("YYYY-MM-DD");
        this.common.PostMethod('GetPayuReport', this.lists).then(function (res) {
            res.Data.forEach(function (element) {
                element.info = JSON.parse(element.info);
            });
            console.log(res);
            _this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data || []);
            console.log(_this.report);
            _this.report.paginator = _this.paginator;
            _this.report.sort = _this.sort;
        });
    };
    PayuComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.common.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
        else {
            this.common.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
    };
    PayuComponent.prototype.GetAdminList = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Admin" }).then(function (res) {
            _this.lists.Adminlist = res.Data;
        });
    };
    PayuComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PayuComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], PayuComponent.prototype, "sort", void 0);
    PayuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payu',
            template: __webpack_require__(/*! raw-loader!./payu.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/payu/payu.component.html"),
            styles: [__webpack_require__(/*! ./payu.component.css */ "./src/app/Portal/Report/payu/payu.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], PayuComponent);
    return PayuComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/report.module.ts":
/*!************************************************!*\
  !*** ./src/app/Portal/Report/report.module.ts ***!
  \************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _billdepositreport_billdepositreport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billdepositreport/billdepositreport.component */ "./src/app/Portal/Report/billdepositreport/billdepositreport.component.ts");
/* harmony import */ var _report_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report.routing */ "./src/app/Portal/Report/report.routing.ts");
/* harmony import */ var _billreversal_billreversal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./billreversal/billreversal.component */ "./src/app/Portal/Report/billreversal/billreversal.component.ts");
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collection/collection.component */ "./src/app/Portal/Report/collection/collection.component.ts");
/* harmony import */ var _creditreport_creditreport_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./creditreport/creditreport.component */ "./src/app/Portal/Report/creditreport/creditreport.component.ts");
/* harmony import */ var _usercollection_usercollection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./usercollection/usercollection.component */ "./src/app/Portal/Report/usercollection/usercollection.component.ts");
/* harmony import */ var _userwork_userwork_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userwork/userwork.component */ "./src/app/Portal/Report/userwork/userwork.component.ts");
/* harmony import */ var _due_due_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./due/due.component */ "./src/app/Portal/Report/due/due.component.ts");
/* harmony import */ var _reversed_reversed_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reversed/reversed.component */ "./src/app/Portal/Report/reversed/reversed.component.ts");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var _Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../Pipes/pipe/pipe.module */ "./src/app/Portal/Pipes/pipe/pipe.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _payu_payu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payu/payu.component */ "./src/app/Portal/Report/payu/payu.component.ts");
/* harmony import */ var _amazonreport_amazonreport_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./amazonreport/amazonreport.component */ "./src/app/Portal/Report/amazonreport/amazonreport.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_report_routing__WEBPACK_IMPORTED_MODULE_7__["ReportRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_16__["PipeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_15__["NgxMatSelectSearchModule"],
            ],
            declarations: [
                _billdepositreport_billdepositreport_component__WEBPACK_IMPORTED_MODULE_6__["BilldepositreportComponent"],
                _billreversal_billreversal_component__WEBPACK_IMPORTED_MODULE_8__["BillreversalComponent"],
                _collection_collection_component__WEBPACK_IMPORTED_MODULE_9__["CollectionComponent"],
                _creditreport_creditreport_component__WEBPACK_IMPORTED_MODULE_10__["CreditreportComponent"],
                _usercollection_usercollection_component__WEBPACK_IMPORTED_MODULE_11__["UsercollectionComponent"],
                _userwork_userwork_component__WEBPACK_IMPORTED_MODULE_12__["UserworkComponent"],
                _due_due_component__WEBPACK_IMPORTED_MODULE_13__["DueComponent"],
                _reversed_reversed_component__WEBPACK_IMPORTED_MODULE_14__["ReversedComponent"],
                _payu_payu_component__WEBPACK_IMPORTED_MODULE_18__["PayuComponent"],
                _amazonreport_amazonreport_component__WEBPACK_IMPORTED_MODULE_19__["AmazonreportComponent"]
            ]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/Portal/Report/report.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/Portal/Report/report.routing.ts ***!
  \*************************************************/
/*! exports provided: ReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutes", function() { return ReportRoutes; });
/* harmony import */ var _payu_payu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payu/payu.component */ "./src/app/Portal/Report/payu/payu.component.ts");
/* harmony import */ var _billdepositreport_billdepositreport_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billdepositreport/billdepositreport.component */ "./src/app/Portal/Report/billdepositreport/billdepositreport.component.ts");
/* harmony import */ var _billreversal_billreversal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billreversal/billreversal.component */ "./src/app/Portal/Report/billreversal/billreversal.component.ts");
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection/collection.component */ "./src/app/Portal/Report/collection/collection.component.ts");
/* harmony import */ var _creditreport_creditreport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creditreport/creditreport.component */ "./src/app/Portal/Report/creditreport/creditreport.component.ts");
/* harmony import */ var _usercollection_usercollection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usercollection/usercollection.component */ "./src/app/Portal/Report/usercollection/usercollection.component.ts");
/* harmony import */ var _userwork_userwork_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userwork/userwork.component */ "./src/app/Portal/Report/userwork/userwork.component.ts");
/* harmony import */ var _reversed_reversed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reversed/reversed.component */ "./src/app/Portal/Report/reversed/reversed.component.ts");
/* harmony import */ var _amazonreport_amazonreport_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./amazonreport/amazonreport.component */ "./src/app/Portal/Report/amazonreport/amazonreport.component.ts");









var ReportRoutes = [
    {
        path: '',
        children: [
            {
                path: 'billdeposit',
                component: _billdepositreport_billdepositreport_component__WEBPACK_IMPORTED_MODULE_1__["BilldepositreportComponent"],
                data: {
                    title: 'Bill Deposit Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Bill Deposit Report' }
                    ]
                }
            },
            {
                path: 'billreversal',
                component: _billreversal_billreversal_component__WEBPACK_IMPORTED_MODULE_2__["BillreversalComponent"],
                data: {
                    title: 'Bill Reversal Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Bill Reversal Report' }
                    ]
                }
            },
            {
                path: 'collection',
                component: _collection_collection_component__WEBPACK_IMPORTED_MODULE_3__["CollectionComponent"],
                data: {
                    title: 'Collection Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Collection Report' }
                    ]
                }
            },
            {
                path: 'amazonreport',
                component: _amazonreport_amazonreport_component__WEBPACK_IMPORTED_MODULE_8__["AmazonreportComponent"],
                data: {
                    title: 'Amazon Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Amazon Report' }
                    ]
                }
            },
            {
                path: 'creditreport',
                component: _creditreport_creditreport_component__WEBPACK_IMPORTED_MODULE_4__["CreditreportComponent"],
                data: {
                    title: 'Credit Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Credit Report' }
                    ]
                }
            },
            {
                path: 'usercollection',
                component: _usercollection_usercollection_component__WEBPACK_IMPORTED_MODULE_5__["UsercollectionComponent"],
                data: {
                    title: 'User Collection Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'User Collection Report' }
                    ]
                }
            },
            {
                path: 'userwork',
                component: _userwork_userwork_component__WEBPACK_IMPORTED_MODULE_6__["UserworkComponent"],
                data: {
                    title: 'User Work Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'User Work Report' }
                    ]
                }
            },
            {
                path: 'reversedreport',
                component: _reversed_reversed_component__WEBPACK_IMPORTED_MODULE_7__["ReversedComponent"],
                data: {
                    title: 'Reversed Bill Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Reversed Bill Report' }
                    ]
                },
            },
            {
                path: 'payu',
                component: _payu_payu_component__WEBPACK_IMPORTED_MODULE_0__["PayuComponent"],
                data: {
                    title: 'Payu Transaction Report',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Payu Transaction Report' }
                    ]
                },
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/Portal/Report/reversed/reversed.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Portal/Report/reversed/reversed.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvcmV2ZXJzZWQvcmV2ZXJzZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Report/reversed/reversed.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Portal/Report/reversed/reversed.component.ts ***!
  \**************************************************************/
/*! exports provided: ReversedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversedComponent", function() { return ReversedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReversedComponent = /** @class */ (function () {
    function ReversedComponent(common) {
        this.common = common;
        this.hide = true;
        this.lists = {};
        this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['receipt', 'kno', 'username', 'lastdate', 'cname', 'billamount', 'datetime'];
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.Totalamount = 0;
        this.lists.orderlist = [{ name: "Descending", value: 'desc' }, { name: "Ascending", value: 'asc' }];
        this.GetUserList();
        this.GetAdminList();
    }
    ReversedComponent.prototype.ngOnInit = function () {
        this.report.paginator = this.paginator;
        this.report.sort = this.sort;
        this.lists.userType = localStorage.getItem("UserType");
    };
    ReversedComponent.prototype.ViewReport = function () {
        var _this = this;
        this.lists.Multiple = false;
        this.lists.userids = false;
        this.lists.from = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.from).format("YYYY-MM-DD");
        this.lists.to = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.to).format("YYYY-MM-DD");
        this.lists.userType = localStorage.getItem("UserType");
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.lists.userid = 0;
        }
        else if (localStorage.getItem("UserType") == "Admin") {
            if (!this.lists.agentid) {
                this.lists.userids = [];
                this.lists.Userlist.forEach(function (element) {
                    _this.lists.userids.push(element.id);
                });
                this.lists.Multiple = true;
                this.lists.userid = localStorage.getItem("UserId");
            }
        }
        else {
            this.lists.userid = localStorage.getItem("UserId");
        }
        if (this.lists.agentid) {
            this.lists.userid = this.lists.agentid;
        }
        if (this.lists.adminid) {
            this.lists.userids = [];
            this.lists.Userlist.forEach(function (element) {
                if (element.adminid == _this.lists.adminid) {
                    _this.lists.userids.push(element.id);
                }
            });
        }
        this.lists.myduedate = "";
        if (this.lists.duedate) {
            var duedate = new Date(this.lists.duedate);
            var fduedate = moment__WEBPACK_IMPORTED_MODULE_3__(duedate).format("DD-MM-YYYY");
            this.lists.myduedate = fduedate;
        }
        this.common.PostMethod('GetReversedBills', this.lists).then(function (res) {
            _this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data || []);
            console.log(_this.report);
            _this.report.paginator = _this.paginator;
            _this.report.sort = _this.sort;
            _this.lists.Totalamount = 0;
            if (_this.lists.duedate) {
                _this.lists.duedate = "";
            }
            res.Data.forEach(function (element) {
                _this.lists.Totalamount = _this.lists.Totalamount + element.billamount;
            });
        });
    };
    ReversedComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.common.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
        else {
            this.common.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
    };
    ReversedComponent.prototype.GetAdminList = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Admin" }).then(function (res) {
            _this.lists.Adminlist = res.Data;
        });
    };
    ReversedComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ReversedComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ReversedComponent.prototype, "sort", void 0);
    ReversedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reversed',
            template: __webpack_require__(/*! raw-loader!./reversed.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/reversed/reversed.component.html"),
            styles: [__webpack_require__(/*! ./reversed.component.css */ "./src/app/Portal/Report/reversed/reversed.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], ReversedComponent);
    return ReversedComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/usercollection/usercollection.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Portal/Report/usercollection/usercollection.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvdXNlcmNvbGxlY3Rpb24vdXNlcmNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Report/usercollection/usercollection.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Portal/Report/usercollection/usercollection.component.ts ***!
  \**************************************************************************/
/*! exports provided: UsercollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsercollectionComponent", function() { return UsercollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsercollectionComponent = /** @class */ (function () {
    function UsercollectionComponent(comman) {
        this.comman = comman;
        this.hide = true;
        this.lists = {};
        this.report = [];
        this.newreport = [];
        this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['no', 'name', 'mobile', 'TotalAmount', 'Totalbill'];
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.Totalamount = 0;
        this.GetAdminList();
        this.GetUserList();
        this.lists.usertype = localStorage.getItem("UserType");
    }
    UsercollectionComponent.prototype.ngOnInit = function () {
    };
    UsercollectionComponent.prototype.ViewReport = function () {
        var _this = this;
        this.lists.from = moment__WEBPACK_IMPORTED_MODULE_2__(this.lists.from).format("YYYY-MM-DD");
        this.lists.to = moment__WEBPACK_IMPORTED_MODULE_2__(this.lists.to).format("YYYY-MM-DD");
        this.lists.usertype = localStorage.getItem("UserType");
        if (this.lists.adminid) {
            this.lists.userid = localStorage.getItem("UserId");
        }
        if (localStorage.getItem("UserType") == "Admin") {
            this.lists.userid = localStorage.getItem("UserId");
        }
        this.comman.PostMethod('UserWiseBillReport', this.lists).then(function (res) {
            _this.report = res.Data;
        });
    };
    UsercollectionComponent.prototype.Search = function (ev) {
        // console.log(ev);
        // let search = ev.target.value;
        // if (search) {
        //   this.report = this.newreport;
        //   if (search && search.trim() != '') {
        //     this.report = this.report.filter((item) => {
        //       search = parseInt(search);
        //       return (item.kno.indexOf(search) > -1);
        //     })
        //   }
        // }
    };
    UsercollectionComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.comman.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
        else {
            this.comman.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
    };
    UsercollectionComponent.prototype.GetAdminList = function () {
        var _this = this;
        this.comman.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Admin" }).then(function (res) {
            _this.lists.Adminlist = res.Data;
        });
    };
    UsercollectionComponent.prototype.printDiv = function () {
        var node = document.getElementById('my-node');
        dom_to_image__WEBPACK_IMPORTED_MODULE_4___default.a.toPng(node)
            .then(function (dataUrl) {
            var popup = window.open();
            popup.document.write('<img src=' + dataUrl + '>');
            popup.document.close();
            setTimeout(function () {
                popup.focus();
                popup.print();
                popup.close();
            }, 1000);
        });
    };
    UsercollectionComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    UsercollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usercollection',
            template: __webpack_require__(/*! raw-loader!./usercollection.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/usercollection/usercollection.component.html"),
            styles: [__webpack_require__(/*! ./usercollection.component.css */ "./src/app/Portal/Report/usercollection/usercollection.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], UsercollectionComponent);
    return UsercollectionComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Report/userwork/userwork.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Portal/Report/userwork/userwork.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9SZXBvcnQvdXNlcndvcmsvdXNlcndvcmsuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Report/userwork/userwork.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Portal/Report/userwork/userwork.component.ts ***!
  \**************************************************************/
/*! exports provided: UserworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserworkComponent", function() { return UserworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserworkComponent = /** @class */ (function () {
    function UserworkComponent(comman) {
        this.comman = comman;
        this.hide = true;
        this.lists = {};
        this.report = [];
        this.newreport = [];
        this.lists.displayedColumns = ['receipt', 'kno', 'cname', 'mobile', 'billamount', 'lastdate', 'username', 'billstatus'];
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.Totalamount = 0;
        this.lists.Totalworkassign = 0;
        this.lists.Totalworkassignsub = 0;
        this.lists.Totalworkassignpen = 0;
        this.lists.orderlist = [{ name: "Descending", value: 'desc' }, { name: "Ascending", value: 'asc' }];
        this.GetUserList();
        this.GetDepositorlist();
    }
    UserworkComponent.prototype.ngOnInit = function () {
        this.report.paginator = this.paginator;
        this.report.sort = this.sort;
    };
    UserworkComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.comman.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
        else {
            this.comman.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
    };
    UserworkComponent.prototype.GetDepositorlist = function () {
        var _this = this;
        this.comman.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Depositor" }).then(function (res) {
            _this.lists.depositorlist = res.Data;
        });
    };
    UserworkComponent.prototype.ViewReport = function () {
        var _this = this;
        this.lists.Multiple = false;
        this.lists.userids = false;
        this.lists.from = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.from).format("YYYY-MM-DD");
        this.lists.to = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.to).format("YYYY-MM-DD");
        this.lists.userType = localStorage.getItem("UserType");
        if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
            this.lists.userid = 0;
        }
        else if (localStorage.getItem("UserType") == "Admin") {
            if (!this.lists.agentid) {
                this.lists.userids = [];
                this.lists.Userlist.forEach(function (element) {
                    _this.lists.userids.push(element.id);
                });
                this.lists.Multiple = true;
                this.lists.userid = localStorage.getItem("UserId");
            }
        }
        else {
            this.lists.userid = localStorage.getItem("UserId");
        }
        if (this.lists.agentid) {
            this.lists.userid = this.lists.agentid;
        }
        if (this.lists.adminid) {
            this.lists.userids = [];
            this.lists.Userlist.forEach(function (element) {
                if (element.adminid == _this.lists.adminid) {
                    _this.lists.userids.push(element.id);
                }
            });
        }
        this.lists.myduedate = "";
        if (this.lists.duedate) {
            var duedate = new Date(this.lists.duedate);
            var fduedate = moment__WEBPACK_IMPORTED_MODULE_3__(duedate).format("DD-MM-YYYY");
            this.lists.myduedate = fduedate;
        }
        this.comman.PostMethod('GetAssingBill', this.lists).then(function (res) {
            _this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data);
            _this.report.paginator = _this.paginator;
            _this.report.sort = _this.sort;
            _this.newreport = res.Data;
            _this.lists.Totalamount = 0;
            if (_this.lists.duedate) {
                _this.lists.duedate = "";
            }
            _this.lists.assignlist = 0;
            _this.lists.successlist = 0;
            _this.lists.onholdlist = 0;
            res.Data.forEach(function (element) {
                if (element.billstatus == "Assign") {
                    _this.lists.assignlist = _this.lists.assignlist + 1;
                }
                if (element.billstatus == "On Hold") {
                    _this.lists.onholdlist = _this.lists.onholdlist + 1;
                }
                if (element.billstatus == "Success") {
                    _this.lists.successlist = _this.lists.successlist + 1;
                }
                _this.lists.Totalamount = _this.lists.Totalamount + element.billamount;
            });
        });
    };
    UserworkComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserworkComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserworkComponent.prototype, "sort", void 0);
    UserworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userwork',
            template: __webpack_require__(/*! raw-loader!./userwork.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Report/userwork/userwork.component.html"),
            styles: [__webpack_require__(/*! ./userwork.component.css */ "./src/app/Portal/Report/userwork/userwork.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], UserworkComponent);
    return UserworkComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Portal-Report-report-module-es5.js.map