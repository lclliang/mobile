;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M851.387 501.708c0.257 3.148 0.021 6.386-0.835 9.613l-61.587 271.837c-0.864 3.259-2.287 6.215-4.096 8.842-6.595 13.17-16.626 24.822-29.96 33.299-14.05 8.93-29.736 13.1-45.234 13.069l0-0.173-395.593-0.165c-1.381 0.205-2.782 0.347-4.22 0.347-1.445 0-2.855-0.143-4.243-0.351l-105.226-0.044c-1.479 0.237-2.985 0.395-4.53 0.395-15.742 0-28.503-12.758-28.503-28.499l0.261-342.16c0-15.741 12.761-28.5 28.502-28.5 1.178 0 2.333 0.094 3.475 0.233l94.583-0.217-0.002-0.541c87.031-6.228 155.988-77.571 158.451-165.59-0.222-2.473-0.379-4.966-0.379-7.497 0-45.794 37.123-82.917 82.918-82.917 39.35 0 72.226 27.439 80.718 64.209l0.418-0.054c4.669 20.991 7.21 42.782 7.21 65.178 0 34.526-5.892 67.663-16.677 98.505l159.082 0.17c1.466 0 2.896 0.145 4.301 0.359 27.162 1.071 53.327 15.058 68.737 39.897C848.756 466.748 852.667 484.494 851.387 501.708M224.387 780.994l56.995 0.023 0.217-284.756-56.945 0.131L224.387 780.994zM790.848 480.733c-5.481-8.836-15.157-13.477-24.855-12.958l0-0.083c-0.024 0-0.047 0.004-0.072 0.004l-201.085-0.214c-15.739 0-28.5-12.761-28.5-28.502 0-4.534 1.086-8.805 2.97-12.61l-0.302-0.248c11.39-21.199 19.671-44.3 24.366-68.678l0.358 0.009c0 0 3.788-15.389 3.739-44.906-0.037-23.382-4.302-44.732-4.302-44.732l-0.214 0.002c0.02-0.414 0.062-0.822 0.062-1.241 0-14.719-11.932-26.653-26.651-26.653-14.719 0-26.651 11.934-26.651 26.653 0 0.616 0.051 1.22 0.092 1.826l-0.375 0.004c0 0 0.457 22.253-3.985 45.326-1.885 9.793-4.539 18.924-6.95 26.153-0.047-0.023-0.095-0.042-0.141-0.065-23.989 73.336-84.309 130.19-159.692 149.341l-0.273 291.881 371.424 0.154c1.255 0 2.48 0.108 3.691 0.267 3.709-0.493 7.37-1.771 10.735-3.909 4.773-3.035 8.241-7.341 10.27-12.192l0.074 0.038 59.297-261.725-0.228-0.068C796.019 496.204 795.266 487.854 790.848 480.733"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianzan1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M352.5 762c0 0 0.2 14.3-18.1 14.3l-87.7 0c0 0-21.6 0-21.6-21.6L204.1 415c0 0 0.3-20.6 21.3-20.6l101.3 0c0 0 25.8-0.3 25.8 25.8L352.5 762z"  ></path>' +
    '' +
    '<path d="M757 713.4c0 0-19.5 62.9-43.4 62.9L459.1 776.3c-17.7 0-62.9-12-62.9-45.2L396.2 394.3c0 0 125.8-93.1 125.8-211.8 3.6-6.2-6.2-43.4 40.8-43.4 0 0 110.8 12.4 45.2 255.3l169.3 0c0 0 42.5-3.6 42.5 40.8C819.9 435.1 819.9 498.9 757 713.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)