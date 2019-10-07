// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/javascript/icons.js":[function(require,module,exports) {
var svgPlaceholder = document.createElement("div");
svgPlaceholder.style.position = "absolute";
svgPlaceholder.style.width = 0;
svgPlaceholder.style.height = 0;
svgPlaceholder.style.overflow = "hidden";
document.body.appendChild(svgPlaceholder);
svgPlaceholder.innerHTML = "\n\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg style=\"display: none\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n    <title>\u4E0B\u8F7D</title>\n    <desc>Created with Sketch.</desc>\n    <symbol id=\"icon-download\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g transform=\"translate(-116.000000, -499.000000)\" fill=\"#FD1BB8\">\n            <g transform=\"translate(116.000000, 499.000000)\">\n                <path d=\"M23.9976794,19.1885206 L23.9802265,19.1885206 C23.895261,18.5134181 23.3256733,17.9898552 22.6276755,17.9898552 C21.9296543,17.9898552 21.3600666,18.5134415 21.2752418,19.1885206 L21.257789,19.1885206 C21.257789,19.1885206 21.257789,21.2433857 19.2027597,21.2433856 L4.81825879,21.2433856 C2.76334685,21.2433856 2.76334685,19.1885206 2.76334685,19.1885206 L2.74624584,19.1885206 C2.66090503,18.5134181 2.09129382,17.9898552 1.39343683,17.9898552 C0.695415616,17.9898552 0.125851327,18.5134415 0.0404636008,19.1885206 L0.0234329706,19.1885206 C0.0234329706,19.1885206 0.0234329706,19.2343813 0.0278900196,19.3155231 C0.0275146849,19.3306771 0.0234329706,19.3447051 0.0234329706,19.3597418 C0.0234329706,19.4631688 0.0372029119,19.5631944 0.0587140509,19.6597483 C0.203544775,20.8673278 0.951907209,23.9832995 4.81823533,23.9832995 L19.2027597,23.9832995 C22.828712,23.9832995 23.7161579,21.0354759 23.9305656,19.7628 C23.9731435,19.6326027 23.9957711,19.4967111 23.9976794,19.3597418 C23.9976794,19.3364244 23.9918383,19.3145144 23.9908296,19.2915724 C23.99592,19.2262179 23.9976794,19.1885206 23.9976794,19.1885206 Z\" id=\"Path\"></path>\n                <path d=\"M3.59826991,11.5300391 L11.1350974,19.0384587 C11.3696628,19.2719338 11.6871777,19.4029616 12.0181332,19.4028579 C12.349078,19.4029425 12.6665786,19.2719172 12.9011455,19.0384587 L20.4383483,11.5302971 C20.9259497,11.0445254 20.9259497,10.2568471 20.4383483,9.77095808 C19.9506061,9.28509252 19.1599251,9.28509252 18.6723002,9.77095808 L13.2807455,15.1413066 L13.2807455,1.24253044 C13.2801817,0.912810944 13.148249,0.596908639 12.9141413,0.36472584 C12.6795289,0.131934872 12.3622214,0.00161079526 12.0317154,0.00229716634 C11.3420219,0.00229716634 10.7828965,0.557458145 10.7828965,1.24253044 L10.7828965,15.169644 L5.36403649,9.77095808 C5.05051811,9.44761071 4.58614023,9.31798088 4.14963067,9.43177644 C3.71298035,9.54561891 3.37206282,9.88526971 3.25779809,10.3202311 C3.1435099,10.7550751 3.27370272,11.2176936 3.59826991,11.5300391 Z\" id=\"Path\"></path>\n            </g>\n        </g>\n    </symbol>\n\n    <symbol id=\"icon-share\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g id=\"iPhone-8\" transform=\"translate(-176.000000, -500.000000)\" fill=\"#FD1BB8\">\n            <g id=\"\u5206\u4EAB\" transform=\"translate(176.000000, 500.000000)\">\n                <path d=\"M19.6276596,17.4468085 C18.656292,17.4460472 17.7351514,17.8783622 17.1150468,18.6260426 L6.54551489,12.7429447 C6.54932767,12.6770383 6.55531915,12.6116766 6.55531915,12.5446809 C6.55531915,12.4313872 6.54932767,12.319183 6.53788937,12.2086128 L17.4837957,5.74815319 C18.0772104,6.26749459 18.8390809,6.55358316 19.6276596,6.55319148 C21.4325731,6.55319148 22.8957447,5.09001994 22.8957447,3.28510637 C22.8957447,1.48019281 21.4325731,0.017021266 19.6276596,0.017021266 C17.822746,0.017021266 16.3595745,1.48019281 16.3595745,3.28510637 C16.3595745,3.67618723 16.432017,4.0492936 16.5578383,4.3968 L5.95181276,10.656817 C5.34044938,9.79134515 4.34685979,9.27667711 3.28723404,9.27659576 C1.48232048,9.27659576 0.0191489362,10.7397673 0.0191489362,12.5446809 C0.0191489362,14.3495944 1.48232048,15.812766 3.28723404,15.812766 C4.39344928,15.8129264 5.42439637,15.2525488 6.02588936,14.3241532 L16.4178553,20.1086638 C16.3796006,20.3084858 16.360089,20.5114435 16.3595745,20.7148936 C16.3595745,22.5198072 17.822746,23.9829787 19.6276596,23.9829787 C21.4325731,23.9829787 22.8957447,22.5198072 22.8957447,20.7148936 C22.8957447,18.9099801 21.4325731,17.4468085 19.6276596,17.4468085 Z\" id=\"Path\"></path>\n            </g>\n        </g>\n    </symbol>\n\n    <symbol id=\"icon-like\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g id=\"iPhone-8\" transform=\"translate(-60.000000, -502.000000)\" fill=\"#FD1BB8\">\n            <g id=\"\u559C\u6B22\" transform=\"translate(60.000000, 502.000000)\">\n                <path d=\"M17.4,0 C15.3,0 13.3227273,0.898561565 12,2.35709628 C10.6772727,0.898561565 8.7,8.22500989e-16 6.6,8.22500989e-16 C2.87727273,8.22500989e-16 0,2.6956847 0,6.1857499 C0,10.457173 4.07727273,13.882125 10.2545455,19.1693134 L12,20.6278481 L13.7454545,19.1693134 C19.9227273,13.882125 24,10.457173 24,6.1857499 C24,2.6956847 21.1227273,8.22500989e-16 17.4,0 Z\" id=\"Path\"></path>\n            </g>\n        </g>\n    </symbol>\n\n    <symbol id=\"icon-comment\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g id=\"iPhone-8\" transform=\"translate(-231.000000, -503.000000)\" fill=\"#FD1BB8\">\n            <g id=\"\u8BC4\u8BBA\" transform=\"translate(231.000000, 503.000000)\">\n                <path d=\"M23.529784,1.94060485 C22.9036092,0.688255224 21.7261283,0.000824188235 20.2151412,0.000824188235 L3.78485875,0.000824188235 C2.27387172,0.000824188235 1.09639082,0.688255224 0.470216024,1.94060485 C0.0346161412,2.81180459 0.0210036471,3.66939184 0.0210036471,3.76467929 L0.0210036471,13.803895 C0.0210036471,13.8991825 0.0346161412,14.7567697 0.470216024,15.6347757 C1.09639082,16.8871253 2.27387172,17.5745563 3.78485875,17.5745563 L4.35658358,17.5745563 L4.35658358,19.2284746 C4.35658358,19.4190495 4.38380856,20.1268993 4.90788967,20.6713991 C5.15291459,20.9232303 5.58851447,21.2227052 6.28275174,21.2227052 C7.03143901,21.2227052 7.69164506,20.6918179 7.90944499,20.4944367 L11.4555002,17.5745563 L20.2151412,17.5745563 C21.7261283,17.5745563 22.9036092,16.8871253 23.529784,15.6347757 C23.9653838,14.7567697 23.9789963,13.8991824 23.9789964,13.803895 L23.9789964,3.76467929 C23.9789964,3.66939181 23.9653839,2.81180459 23.529784,1.94060485 Z M21.9235095,13.803895 C21.9235095,13.8107012 21.909897,14.2735261 21.692097,14.7159322 C21.4198471,15.260432 20.950216,15.5190695 20.2151412,15.5190695 L11.0879628,15.5190695 C10.8497441,15.5190695 10.6183317,15.6007444 10.434563,15.7504819 L6.58222666,18.9221934 C6.56861416,18.9358059 6.55500167,18.9494184 6.53458292,18.9630309 C6.50735793,18.9902559 6.45290795,19.0310934 6.40526421,19.0651246 L6.40526421,17.0028315 C6.40526421,16.9143503 6.39165172,16.8258691 6.37123296,16.7441941 L6.37123296,16.7305816 C6.18065802,15.6075507 5.21417082,15.5190695 4.92150216,15.5190695 L3.78485875,15.5190695 C2.84559654,15.5190695 2.50528414,15.0902758 2.32832169,14.7635759 C2.09010301,14.3211698 2.06968428,13.8379262 2.06968428,13.803895 L2.06968428,3.76467929 C2.06968428,3.75787304 2.08329678,3.29504819 2.30109671,2.85264207 C2.57334661,2.30814224 3.04297774,2.04950482 3.77805252,2.04950482 L20.208335,2.04950482 C20.9434098,2.04950482 21.4130409,2.301336 21.6852908,2.85264207 C21.9030907,3.29504819 21.9167032,3.75787304 21.9167032,3.76467929 L21.9167032,13.803895 L21.9235095,13.803895 Z\" id=\"Shape\" fill-rule=\"nonzero\"></path>\n                <path d=\"M5.15972085,8.79449652 C5.15972083,9.38052132 5.47236134,9.92203058 5.97987371,10.215043 C6.48738608,10.5080554 7.1126671,10.5080554 7.62017947,10.215043 C8.12769184,9.92203058 8.44033234,9.38052132 8.44033233,8.79449652 C8.44033233,7.88858067 7.70594243,7.15419078 6.80002659,7.15419078 C5.89411074,7.15419078 5.15972085,7.88858067 5.15972085,8.79449652 Z\" id=\"Path\"></path>\n                <path d=\"M10.3596943,8.79449652 C10.3596942,9.38052133 10.6723347,9.92203059 11.1798471,10.215043 C11.6873595,10.5080554 12.3126405,10.5080554 12.8201529,10.215043 C13.3276653,9.92203059 13.6403058,9.38052133 13.6403057,8.79449652 C13.6403058,8.20847171 13.3276653,7.66696245 12.8201529,7.37395004 C12.3126405,7.08093763 11.6873595,7.08093763 11.1798471,7.37395004 C10.6723347,7.66696245 10.3596942,8.20847171 10.3596943,8.79449652 Z\" id=\"Path\"></path>\n                <path d=\"M15.5596677,8.79449652 C15.5596677,9.70041236 16.2940576,10.4348023 17.1999734,10.4348023 C18.1058893,10.4348023 18.8402792,9.70041236 18.8402792,8.79449652 C18.8402792,7.88858067 18.1058893,7.15419078 17.1999734,7.15419078 C16.2940576,7.15419078 15.5596677,7.88858067 15.5596677,8.79449652 Z\" id=\"Path\"></path>\n            </g>\n        </g>\n    </symbol>\n</svg>\n\n\n\n\n\n\n\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg>\n<symbol id=\"icon-circle\" width=\"120px\" height=\"120px\" viewBox=\"0 0 120 120\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n    <title>\u5FAA\u73AF\u6A21\u5F0F</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <radialGradient cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\" r=\"50%\" gradientTransform=\"translate(0.500000,0.500000),scale(1.000000,0.994186),translate(-0.500000,-0.500000)\" id=\"radialGradient-1\">\n            <stop stop-color=\"#AC2D73\" offset=\"0%\"></stop>\n            <stop stop-color=\"#120A82\" offset=\"92%\"></stop>\n            <stop stop-color=\"#07006B\" offset=\"100%\"></stop>\n        </radialGradient>\n        <linearGradient x1=\"90.5072268%\" y1=\"20.6957496%\" x2=\"9.4941375%\" y2=\"79.3043243%\" id=\"linearGradient-2\">\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FC429F\" offset=\"25%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"87%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"126.40209%\" y1=\"13.5040932%\" x2=\"-24.1592819%\" y2=\"87.2715353%\" id=\"linearGradient-3\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"67.8867993%\" y1=\"30.9688504%\" x2=\"75.4688625%\" y2=\"21.1618118%\" id=\"linearGradient-4\">\n            <stop stop-color=\"#FC57A9\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"61.4131653%\" y1=\"33.8941487%\" x2=\"39.4202448%\" y2=\"71.4869303%\" id=\"linearGradient-5\">\n            <stop stop-color=\"#B639E5\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"92.2146132%\" y1=\"-4.63859816%\" x2=\"10.4535745%\" y2=\"110.070945%\" id=\"linearGradient-6\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"iPhone-8\" transform=\"translate(-17.000000, -198.000000)\">\n            <g id=\"\u5FAA\u73AF\u6A21\u5F0F\" transform=\"translate(17.000000, 198.000000)\">\n                <g id=\"\u56FE-\u8D44\u6E90-12\">\n                    <ellipse id=\"Oval\" fill=\"url(#radialGradient-1)\" cx=\"60\" cy=\"60.3278689\" rx=\"56.0655738\" ry=\"56.3934426\"></ellipse>\n                    <path d=\"M59.9548308,5.61469731 C86.7262364,5.59034291 109.53495,25.1646104 113.727249,51.7617846 C117.919548,78.3589588 102.24883,104.07023 76.7829298,112.377093 C51.3170297,120.683956 23.6283668,109.116322 11.5058441,85.1059517 C-0.616678668,61.0955812 6.4316347,31.7820844 28.1225135,15.9982575 C37.381525,9.2515634 48.5217809,5.61766153 59.9548308,5.61469731 Z M59.9548308,3.93450958 C33.9678996,3.96156583 11.4045662,21.9459534 5.43790156,47.387911 C-0.528763057,72.8298686 11.6648878,99.0619808 34.8998782,110.769246 C42.7110885,114.676325 51.3147233,116.713418 60.0383473,116.721311 C81.0928073,116.708669 100.365002,104.83052 109.936925,85.9670171 C119.508848,67.1035138 117.766372,44.4356389 105.425394,27.2765176 C94.8863331,12.5904686 77.9653263,3.9033857 59.9590067,3.93450958 L59.9548308,3.93450958 Z\" id=\"Shape\" fill=\"url(#linearGradient-2)\" fill-rule=\"nonzero\"></path>\n                    <path d=\"M3.10837279,78.6885246 C-5.35495222,53.4533715 3.8779541,25.6687872 25.7703616,10.4918033 L28.852459,14.9558468 C8.92145404,28.7385915 0.519285038,54.0210331 8.24380779,76.9680513 L3.10837279,78.6885246 Z\" id=\"Path\" fill=\"url(#linearGradient-3)\"></path>\n                    <path d=\"M114.245163,65.6499501 C116.372688,46.0329572 107.677121,26.8058523 91.5234854,15.4091655 C75.3698494,4.01247878 54.2926478,2.23434907 36.4483634,10.7628794 L34.0983607,5.8762456 C53.7206607,-3.5030912 76.898549,-1.5488063 94.6627212,10.9828374 C112.426893,23.5144812 121.990192,44.6572978 119.651842,66.2295082 L114.245163,65.6499501 Z\" id=\"Path\" fill=\"url(#linearGradient-4)\"></path>\n                    <path d=\"M54.6247073,120 C35.5244375,118.320115 18.3772721,107.417802 8.52459016,90.6891545 L13.1637002,87.8688525 C22.1211082,103.081395 37.7137233,112.995026 55.0819672,114.520073 L54.6247073,120 Z\" id=\"Path\" fill=\"url(#linearGradient-5)\"></path>\n                    <path d=\"M64.6784245,119.344262 L64.2622951,113.931055 C86.6626643,112.2425 105.714136,96.9321406 112.196238,75.4098361 L117.377049,76.9630103 C110.258865,100.635232 89.3126319,117.480598 64.6784245,119.344262 Z\" id=\"Path\" fill=\"url(#linearGradient-6)\"></path>\n                </g>\n                <g transform=\"translate(39.000000, 39.000000)\" fill=\"#FFFFFF\" id=\"Path\">\n                    <path d=\"M41.757359,2.73433339 C41.6791264,2.64709519 41.5843986,2.5762062 41.4786376,2.52575382 C41.1561911,2.37613 40.7752467,2.43670163 40.5151107,2.67895828 L36.4201215,6.34940498 C31.1022654,0.985402918 23.0931791,-1.37265373 15.3332807,0.893111073 C4.05521717,4.18700704 -2.41905579,16.0003633 0.873917253,27.2793497 C4.1668903,38.5583361 15.9802465,45.0307633 27.25831,41.7377902 C34.570593,39.6030798 39.8635303,33.8892917 41.7832007,27.0596951 C41.8487279,26.8215821 41.8413445,26.5557816 41.8413445,26.2973645 C41.8413446,25.5645984 41.5501912,24.8618579 41.0319608,24.3438006 C40.5137304,23.8257433 39.8108928,23.5348247 39.0781267,23.5350695 C37.876393,23.5314352 36.8089536,24.301929 36.4339653,25.4436649 C35.0625085,30.4957205 31.174253,34.7356079 25.7788718,36.3101068 C17.53721,38.7170781 8.90515365,33.9861981 6.49818232,25.7426905 C4.09213391,17.5001058 8.82393682,8.86712652 17.0655986,6.46015519 C22.5911114,4.84689373 28.2938245,6.44261974 32.1765425,10.1536748 L27.9680343,13.9219509 C27.6993029,14.154915 27.5973188,14.5267926 27.7096172,14.8642506 C27.8286736,15.2011159 28.1433888,15.4364601 28.5005583,15.4558414 L41.0347138,16.8762129 C41.5235532,16.9008733 41.9408639,16.5268179 41.9696302,16.0382029 L41.9825511,3.3748388 C41.9962373,3.13980245 41.9151224,2.90909061 41.757359,2.73433339 Z\"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</symbol> \n\n\n<symbol id=\"icon-pre\" width=\"120px\" height=\"120px\" viewBox=\"0 0 120 120\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n    <title>\u4E0A\u4E00\u9996</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <radialGradient cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\" r=\"50%\" gradientTransform=\"translate(0.500000,0.500000),scale(1.000000,0.994186),translate(-0.500000,-0.500000)\" id=\"radialGradient-1\">\n            <stop stop-color=\"#AC2D73\" offset=\"0%\"></stop>\n            <stop stop-color=\"#120A82\" offset=\"92%\"></stop>\n            <stop stop-color=\"#07006B\" offset=\"100%\"></stop>\n        </radialGradient>\n        <linearGradient x1=\"90.5072268%\" y1=\"20.6957496%\" x2=\"9.4941375%\" y2=\"79.3043243%\" id=\"linearGradient-2\">\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FC429F\" offset=\"25%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"87%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"126.40209%\" y1=\"13.5040932%\" x2=\"-24.1592819%\" y2=\"87.2715353%\" id=\"linearGradient-3\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"67.8867993%\" y1=\"30.9688504%\" x2=\"75.4688625%\" y2=\"21.1618118%\" id=\"linearGradient-4\">\n            <stop stop-color=\"#FC57A9\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"61.4131653%\" y1=\"33.8941487%\" x2=\"39.4202448%\" y2=\"71.4869303%\" id=\"linearGradient-5\">\n            <stop stop-color=\"#B639E5\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"92.2146132%\" y1=\"-4.63859816%\" x2=\"10.4535745%\" y2=\"110.070945%\" id=\"linearGradient-6\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"iPhone-8\" transform=\"translate(-177.000000, -29.000000)\">\n            <g id=\"\u4E0A\u4E00\u9996\" transform=\"translate(177.000000, 29.000000)\">\n                <g id=\"\u56FE-\u8D44\u6E90-12\">\n                    <ellipse id=\"Oval\" fill=\"url(#radialGradient-1)\" cx=\"60\" cy=\"60.3278689\" rx=\"56.0655738\" ry=\"56.3934426\"></ellipse>\n                    <path d=\"M59.9548308,5.61469731 C86.7262364,5.59034291 109.53495,25.1646104 113.727249,51.7617846 C117.919548,78.3589588 102.24883,104.07023 76.7829298,112.377093 C51.3170297,120.683956 23.6283668,109.116322 11.5058441,85.1059517 C-0.616678668,61.0955812 6.4316347,31.7820844 28.1225135,15.9982575 C37.381525,9.2515634 48.5217809,5.61766153 59.9548308,5.61469731 Z M59.9548308,3.93450958 C33.9678996,3.96156583 11.4045662,21.9459534 5.43790156,47.387911 C-0.528763057,72.8298686 11.6648878,99.0619808 34.8998782,110.769246 C42.7110885,114.676325 51.3147233,116.713418 60.0383473,116.721311 C81.0928073,116.708669 100.365002,104.83052 109.936925,85.9670171 C119.508848,67.1035138 117.766372,44.4356389 105.425394,27.2765176 C94.8863331,12.5904686 77.9653263,3.9033857 59.9590067,3.93450958 L59.9548308,3.93450958 Z\" id=\"Shape\" fill=\"url(#linearGradient-2)\" fill-rule=\"nonzero\"></path>\n                    <path d=\"M3.10837279,78.6885246 C-5.35495222,53.4533715 3.8779541,25.6687872 25.7703616,10.4918033 L28.852459,14.9558468 C8.92145404,28.7385915 0.519285038,54.0210331 8.24380779,76.9680513 L3.10837279,78.6885246 Z\" id=\"Path\" fill=\"url(#linearGradient-3)\"></path>\n                    <path d=\"M114.245163,65.6499501 C116.372688,46.0329572 107.677121,26.8058523 91.5234854,15.4091655 C75.3698494,4.01247878 54.2926478,2.23434907 36.4483634,10.7628794 L34.0983607,5.8762456 C53.7206607,-3.5030912 76.898549,-1.5488063 94.6627212,10.9828374 C112.426893,23.5144812 121.990192,44.6572978 119.651842,66.2295082 L114.245163,65.6499501 Z\" id=\"Path\" fill=\"url(#linearGradient-4)\"></path>\n                    <path d=\"M54.6247073,120 C35.5244375,118.320115 18.3772721,107.417802 8.52459016,90.6891545 L13.1637002,87.8688525 C22.1211082,103.081395 37.7137233,112.995026 55.0819672,114.520073 L54.6247073,120 Z\" id=\"Path\" fill=\"url(#linearGradient-5)\"></path>\n                    <path d=\"M64.6784245,119.344262 L64.2622951,113.931055 C86.6626643,112.2425 105.714136,96.9321406 112.196238,75.4098361 L117.377049,76.9630103 C110.258865,100.635232 89.3126319,117.480598 64.6784245,119.344262 Z\" id=\"Path\" fill=\"url(#linearGradient-6)\"></path>\n                </g>\n                <g id=\"Group\" transform=\"translate(62.295082, 61.639344) scale(-1, 1) translate(-62.295082, -61.639344) translate(40.655738, 40.655738)\" fill=\"#FFFFFF\">\n                    <path d=\"M30.013345,18.4824896 C31.9627648,19.8670855 31.9627648,22.0908305 30.013345,23.4754264 L3.51281591,41.3283223 C1.56339608,42.7129182 -3.77064001e-08,41.7688755 0,39.2514284 L0,2.70648765 C0,0.189040535 1.5826973,-0.734023408 3.51281591,0.629593776 L30.013345,18.4824896 Z\" id=\"Path\"></path>\n                    <rect id=\"Rectangle\" fill-rule=\"nonzero\" x=\"36.7213115\" y=\"0\" width=\"6.55737705\" height=\"41.9672131\" rx=\"3.27868852\"></rect>\n                </g>\n            </g>\n        </g>\n    </g>\n</symbol>\n\n\n<symbol id=\"icon-play\" width=\"120px\" height=\"120px\" viewBox=\"0 0 120 120\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n    <title>\u56FE-\u8D44\u6E90 14</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <radialGradient cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\" r=\"50%\" id=\"radialGradient-1\">\n            <stop stop-color=\"#AC2D73\" offset=\"0%\"></stop>\n            <stop stop-color=\"#120A82\" offset=\"92%\"></stop>\n            <stop stop-color=\"#07006B\" offset=\"100%\"></stop>\n        </radialGradient>\n        <linearGradient x1=\"90.5072268%\" y1=\"20.6957496%\" x2=\"9.4941375%\" y2=\"79.3043243%\" id=\"linearGradient-2\">\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FC429F\" offset=\"25%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"87%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"126.40209%\" y1=\"13.5040932%\" x2=\"-24.1592819%\" y2=\"87.2715353%\" id=\"linearGradient-3\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"67.8867993%\" y1=\"30.9688504%\" x2=\"75.4688625%\" y2=\"21.1618118%\" id=\"linearGradient-4\">\n            <stop stop-color=\"#FC57A9\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"61.4131653%\" y1=\"33.8941487%\" x2=\"39.4202448%\" y2=\"71.4869303%\" id=\"linearGradient-5\">\n            <stop stop-color=\"#B639E5\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"92.2146132%\" y1=\"-4.63859816%\" x2=\"10.4535745%\" y2=\"110.070945%\" id=\"linearGradient-6\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"-0.012371134%\" y1=\"49.9958763%\" x2=\"99.9876289%\" y2=\"49.9958763%\" id=\"linearGradient-7\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"99.9876289%\" y1=\"50.0041237%\" x2=\"-0.012371134%\" y2=\"50.0041237%\" id=\"linearGradient-8\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"iPhone-8\" transform=\"translate(-98.000000, -367.000000)\">\n            <g id=\"\u56FE-\u8D44\u6E90-14\" transform=\"translate(98.000000, 367.000000)\">\n                <circle id=\"Oval\" fill=\"url(#radialGradient-1)\" cx=\"60\" cy=\"60\" r=\"56.2303665\"></circle>\n                <path d=\"M59.9546981,5.44504565 C86.8047924,5.42076168 109.680547,24.9384252 113.885169,51.4586868 C118.08979,77.9789484 102.373011,103.615869 76.8322597,111.89871 C51.2915079,120.181552 23.5214602,108.647369 11.3633059,84.7064306 C-0.794848386,60.7654923 6.27418198,31.536763 28.0288164,15.7985791 C37.3150428,9.07139481 48.4880431,5.4480013 59.9546981,5.44504565 Z M59.9546981,3.76971662 C33.8913838,3.79669463 11.2617303,21.7290757 5.27752798,47.0974614 C-0.706674366,72.465847 11.5228171,98.6221023 34.8261017,110.295513 C42.6602715,114.191294 51.2891948,116.222496 60.0384601,116.230366 C81.154805,116.217761 100.483646,104.373961 110.083704,85.5650061 C119.683762,66.7560514 117.936164,44.1537265 105.558912,27.0442253 C94.988874,12.4006447 78.0181315,3.73868274 59.9588862,3.76971662 L59.9546981,3.76971662 Z\" id=\"Shape\" fill=\"url(#linearGradient-2)\" fill-rule=\"nonzero\"></path>\n                <path d=\"M3.11355095,79.1623037 C-5.36387289,53.8217077 3.88441428,25.9210279 25.8132918,10.6806283 L28.9005236,15.1633244 C8.93631605,29.0036591 0.520150101,54.3917412 8.25754093,77.4346415 L3.11355095,79.1623037 Z\" id=\"Path\" fill=\"url(#linearGradient-3)\"></path>\n                <path d=\"M114.233663,66.0140859 C116.365439,46.2882849 107.652496,26.9545344 91.4665801,15.4946344 C75.280664,4.0347345 54.1613434,2.24674217 36.2814004,10.8225771 L33.9267016,5.90883895 C53.5882132,-3.52252155 76.8124185,-1.55739696 94.6120892,11.0437551 C112.41176,23.6449072 121.994169,44.9049952 119.651146,66.5968586 L114.233663,66.0140859 Z\" id=\"Path\" fill=\"url(#linearGradient-4)\"></path>\n                <path d=\"M54.8251683,120 C35.4939093,118.324782 18.1393746,107.452756 8.16753927,90.7705822 L12.8627524,87.9581152 C21.9284868,103.128396 37.7096713,113.014486 55.2879581,114.535296 L54.8251683,120 Z\" id=\"Path\" fill=\"url(#linearGradient-5)\"></path>\n                <path d=\"M64.5021584,119.371728 L64.0837696,113.953021 C86.605762,112.262751 105.760674,96.9368384 112.277971,75.3926702 L117.486911,76.9474222 C110.330079,100.643692 89.2701176,117.50617 64.5021584,119.371728 Z\" id=\"Path\" fill=\"url(#linearGradient-6)\"></path>\n                <path d=\"M110.563403,60.3141361 L103.889467,60.3141361 C103.889467,35.9171429 84.2338809,16.1394721 59.9874864,16.1394721 C35.7410918,16.1394721 16.0855055,35.9171429 16.0855055,60.3141361 L9.42408377,60.3141361 C9.42408377,32.2083363 32.0676928,9.42408377 60,9.42408377 C87.9323072,9.42408377 110.575916,32.2083363 110.575916,60.3141361 L110.563403,60.3141361 Z\" id=\"Path\" fill=\"url(#linearGradient-7)\"></path>\n                <path d=\"M59.9874864,110.575916 C32.072455,110.538907 9.45395703,87.7742888 9.42408377,59.6858639 L16.0980191,59.6858639 C16.0980191,84.0828571 35.7536055,103.860528 60,103.860528 C84.2463945,103.860528 103.901981,84.0828571 103.901981,59.6858639 L110.575916,59.6858639 C110.546018,87.7841084 87.9122915,110.552783 59.9874864,110.575916 Z\" id=\"Path\" fill=\"url(#linearGradient-8)\"></path>\n                <path d=\"M80.41678,57.618233 C82.5386301,59.1106606 82.5386301,61.5075899 80.41678,63.0000176 L51.572223,82.2432892 C49.4503729,83.7357169 47.7486911,82.7181526 47.7486911,80.0046478 L47.7486911,40.6136028 C47.7486911,37.900098 49.4713813,36.9051462 51.572223,38.3749613 L80.41678,57.618233 Z\" id=\"Path\" fill=\"#FFFFFF\"></path>\n            </g>\n        </g>\n    </g>\n</symbol>\n\n\n\n\n\n<symbol id=\"icon-pause\" width=\"120px\" height=\"120px\" viewBox=\"0 0 120 120\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n    <title>\u56FE-\u8D44\u6E90 14 copy</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <radialGradient cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\" r=\"50%\" id=\"radialGradient-1\">\n            <stop stop-color=\"#AC2D73\" offset=\"0%\"></stop>\n            <stop stop-color=\"#120A82\" offset=\"92%\"></stop>\n            <stop stop-color=\"#07006B\" offset=\"100%\"></stop>\n        </radialGradient>\n        <linearGradient x1=\"90.5072268%\" y1=\"20.6957496%\" x2=\"9.4941375%\" y2=\"79.3043243%\" id=\"linearGradient-2\">\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FC429F\" offset=\"25%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"87%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"126.40209%\" y1=\"13.5040932%\" x2=\"-24.1592819%\" y2=\"87.2715353%\" id=\"linearGradient-3\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"67.8867993%\" y1=\"30.9688504%\" x2=\"75.4688625%\" y2=\"21.1618118%\" id=\"linearGradient-4\">\n            <stop stop-color=\"#FC57A9\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"61.4131653%\" y1=\"33.8941487%\" x2=\"39.4202448%\" y2=\"71.4869303%\" id=\"linearGradient-5\">\n            <stop stop-color=\"#B639E5\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"92.2146132%\" y1=\"-4.63859816%\" x2=\"10.4535745%\" y2=\"110.070945%\" id=\"linearGradient-6\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"-0.012371134%\" y1=\"49.9958763%\" x2=\"99.9876289%\" y2=\"49.9958763%\" id=\"linearGradient-7\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"99.9876289%\" y1=\"50.0041237%\" x2=\"-0.012371134%\" y2=\"50.0041237%\" id=\"linearGradient-8\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n          \n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"iPhone-8\" transform=\"translate(-193.000000, -387.000000)\">\n            <g id=\"\u56FE-\u8D44\u6E90-14-copy\" transform=\"translate(193.000000, 387.000000)\">\n                <circle id=\"Oval\" fill=\"url(#radialGradient-1)\" cx=\"60\" cy=\"60\" r=\"56.2303665\"></circle>\n                <path d=\"M59.9546981,5.44504565 C86.8047924,5.42076168 109.680547,24.9384252 113.885169,51.4586868 C118.08979,77.9789484 102.373011,103.615869 76.8322597,111.89871 C51.2915079,120.181552 23.5214602,108.647369 11.3633059,84.7064306 C-0.794848386,60.7654923 6.27418198,31.536763 28.0288164,15.7985791 C37.3150428,9.07139481 48.4880431,5.4480013 59.9546981,5.44504565 Z M59.9546981,3.76971662 C33.8913838,3.79669463 11.2617303,21.7290757 5.27752798,47.0974614 C-0.706674366,72.465847 11.5228171,98.6221023 34.8261017,110.295513 C42.6602715,114.191294 51.2891948,116.222496 60.0384601,116.230366 C81.154805,116.217761 100.483646,104.373961 110.083704,85.5650061 C119.683762,66.7560514 117.936164,44.1537265 105.558912,27.0442253 C94.988874,12.4006447 78.0181315,3.73868274 59.9588862,3.76971662 L59.9546981,3.76971662 Z\" id=\"Shape\" fill=\"url(#linearGradient-2)\" fill-rule=\"nonzero\"></path>\n                <path d=\"M3.11355095,79.1623037 C-5.36387289,53.8217077 3.88441428,25.9210279 25.8132918,10.6806283 L28.9005236,15.1633244 C8.93631605,29.0036591 0.520150101,54.3917412 8.25754093,77.4346415 L3.11355095,79.1623037 Z\" id=\"Path\" fill=\"url(#linearGradient-3)\"></path>\n                <path d=\"M114.233663,66.0140859 C116.365439,46.2882849 107.652496,26.9545344 91.4665801,15.4946344 C75.280664,4.0347345 54.1613434,2.24674217 36.2814004,10.8225771 L33.9267016,5.90883895 C53.5882132,-3.52252155 76.8124185,-1.55739696 94.6120892,11.0437551 C112.41176,23.6449072 121.994169,44.9049952 119.651146,66.5968586 L114.233663,66.0140859 Z\" id=\"Path\" fill=\"url(#linearGradient-4)\"></path>\n                <path d=\"M54.8251683,120 C35.4939093,118.324782 18.1393746,107.452756 8.16753927,90.7705822 L12.8627524,87.9581152 C21.9284868,103.128396 37.7096713,113.014486 55.2879581,114.535296 L54.8251683,120 Z\" id=\"Path\" fill=\"url(#linearGradient-5)\"></path>\n                <path d=\"M64.5021584,119.371728 L64.0837696,113.953021 C86.605762,112.262751 105.760674,96.9368384 112.277971,75.3926702 L117.486911,76.9474222 C110.330079,100.643692 89.2701176,117.50617 64.5021584,119.371728 Z\" id=\"Path\" fill=\"url(#linearGradient-6)\"></path>\n                <path d=\"M110.563403,60.3141361 L103.889467,60.3141361 C103.889467,35.9171429 84.2338809,16.1394721 59.9874864,16.1394721 C35.7410918,16.1394721 16.0855055,35.9171429 16.0855055,60.3141361 L9.42408377,60.3141361 C9.42408377,32.2083363 32.0676928,9.42408377 60,9.42408377 C87.9323072,9.42408377 110.575916,32.2083363 110.575916,60.3141361 L110.563403,60.3141361 Z\" id=\"Path\" fill=\"url(#linearGradient-7)\"></path>\n                <path d=\"M59.9874864,110.575916 C32.072455,110.538907 9.45395703,87.7742888 9.42408377,59.6858639 L16.0980191,59.6858639 C16.0980191,84.0828571 35.7536055,103.860528 60,103.860528 C84.2463945,103.860528 103.901981,84.0828571 103.901981,59.6858639 L110.575916,59.6858639 C110.546018,87.7841084 87.9122915,110.552783 59.9874864,110.575916 Z\" id=\"Path\" fill=\"url(#linearGradient-8)\"></path>\n                <g id=\"Group-2\" transform=\"translate(43.000000, 36.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\">\n                    <rect id=\"Rectangle\" x=\"0\" y=\"0\" width=\"9\" height=\"48\" rx=\"4.5\"></rect>\n                    <rect id=\"Rectangle-Copy\" x=\"26\" y=\"0\" width=\"9\" height=\"48\" rx=\"4.5\"></rect>\n                </g>\n            </g>\n        </g>\n    </g>\n</symbol>\n\n\n\n<symbol id=\"icon-next\" width=\"120px\" height=\"120px\" viewBox=\"0 0 120 120\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n    <title>\u4E0B\u4E00\u9996</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <radialGradient cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\" r=\"50%\" gradientTransform=\"translate(0.500000,0.500000),scale(1.000000,0.994186),translate(-0.500000,-0.500000)\" id=\"radialGradient-1\">\n            <stop stop-color=\"#AC2D73\" offset=\"0%\"></stop>\n            <stop stop-color=\"#120A82\" offset=\"92%\"></stop>\n            <stop stop-color=\"#07006B\" offset=\"100%\"></stop>\n        </radialGradient>\n        <linearGradient x1=\"90.5072268%\" y1=\"20.6957496%\" x2=\"9.4941375%\" y2=\"79.3043243%\" id=\"linearGradient-2\">\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FC429F\" offset=\"25%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"87%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"126.40209%\" y1=\"13.5040932%\" x2=\"-24.1592819%\" y2=\"87.2715353%\" id=\"linearGradient-3\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"67.8867993%\" y1=\"30.9688504%\" x2=\"75.4688625%\" y2=\"21.1618118%\" id=\"linearGradient-4\">\n            <stop stop-color=\"#FC57A9\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"61.4131653%\" y1=\"33.8941487%\" x2=\"39.4202448%\" y2=\"71.4869303%\" id=\"linearGradient-5\">\n            <stop stop-color=\"#B639E5\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"92.2146132%\" y1=\"-4.63859816%\" x2=\"10.4535745%\" y2=\"110.070945%\" id=\"linearGradient-6\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"iPhone-8\" transform=\"translate(-17.000000, -29.000000)\">\n            <g id=\"\u4E0B\u4E00\u9996\" transform=\"translate(17.000000, 29.000000)\">\n                <g id=\"\u56FE-\u8D44\u6E90-12\">\n                    <ellipse id=\"Oval\" fill=\"url(#radialGradient-1)\" cx=\"60\" cy=\"60.3278689\" rx=\"56.0655738\" ry=\"56.3934426\"></ellipse>\n                    <path d=\"M59.9548308,5.61469731 C86.7262364,5.59034291 109.53495,25.1646104 113.727249,51.7617846 C117.919548,78.3589588 102.24883,104.07023 76.7829298,112.377093 C51.3170297,120.683956 23.6283668,109.116322 11.5058441,85.1059517 C-0.616678668,61.0955812 6.4316347,31.7820844 28.1225135,15.9982575 C37.381525,9.2515634 48.5217809,5.61766153 59.9548308,5.61469731 Z M59.9548308,3.93450958 C33.9678996,3.96156583 11.4045662,21.9459534 5.43790156,47.387911 C-0.528763057,72.8298686 11.6648878,99.0619808 34.8998782,110.769246 C42.7110885,114.676325 51.3147233,116.713418 60.0383473,116.721311 C81.0928073,116.708669 100.365002,104.83052 109.936925,85.9670171 C119.508848,67.1035138 117.766372,44.4356389 105.425394,27.2765176 C94.8863331,12.5904686 77.9653263,3.9033857 59.9590067,3.93450958 L59.9548308,3.93450958 Z\" id=\"Shape\" fill=\"url(#linearGradient-2)\" fill-rule=\"nonzero\"></path>\n                    <path d=\"M3.10837279,78.6885246 C-5.35495222,53.4533715 3.8779541,25.6687872 25.7703616,10.4918033 L28.852459,14.9558468 C8.92145404,28.7385915 0.519285038,54.0210331 8.24380779,76.9680513 L3.10837279,78.6885246 Z\" id=\"Path\" fill=\"url(#linearGradient-3)\"></path>\n                    <path d=\"M114.245163,65.6499501 C116.372688,46.0329572 107.677121,26.8058523 91.5234854,15.4091655 C75.3698494,4.01247878 54.2926478,2.23434907 36.4483634,10.7628794 L34.0983607,5.8762456 C53.7206607,-3.5030912 76.898549,-1.5488063 94.6627212,10.9828374 C112.426893,23.5144812 121.990192,44.6572978 119.651842,66.2295082 L114.245163,65.6499501 Z\" id=\"Path\" fill=\"url(#linearGradient-4)\"></path>\n                    <path d=\"M54.6247073,120 C35.5244375,118.320115 18.3772721,107.417802 8.52459016,90.6891545 L13.1637002,87.8688525 C22.1211082,103.081395 37.7137233,112.995026 55.0819672,114.520073 L54.6247073,120 Z\" id=\"Path\" fill=\"url(#linearGradient-5)\"></path>\n                    <path d=\"M64.6784245,119.344262 L64.2622951,113.931055 C86.6626643,112.2425 105.714136,96.9321406 112.196238,75.4098361 L117.377049,76.9630103 C110.258865,100.635232 89.3126319,117.480598 64.6784245,119.344262 Z\" id=\"Path\" fill=\"url(#linearGradient-6)\"></path>\n                </g>\n                <path d=\"M70.6690827,59.1382273 C72.6185025,60.5228233 72.6185025,62.7465682 70.6690827,64.1311641 L44.1685536,81.98406 C42.2191338,83.3686559 40.6557377,82.4246132 40.6557377,79.9071661 L40.6557377,43.3622254 C40.6557377,40.8447782 42.238435,39.9217143 44.1685536,41.2853315 L70.6690827,59.1382273 Z\" id=\"Path\" fill=\"#FFFFFF\"></path>\n                <rect id=\"Rectangle\" fill=\"#FFFFFF\" fill-rule=\"nonzero\" x=\"77.3770492\" y=\"40.6557377\" width=\"6.55737705\" height=\"41.9672131\" rx=\"3.27868852\"></rect>\n            </g>\n        </g>\n    </g>\n</symbol>\n\n\n<symbol id=\"icon-list\" width=\"120px\" height=\"120px\" viewBox=\"0 0 120 120\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n    <title>\u97F3\u4E50</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <radialGradient cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\" r=\"50%\" gradientTransform=\"translate(0.500000,0.500000),scale(1.000000,0.994186),translate(-0.500000,-0.500000)\" id=\"radialGradient-1\">\n            <stop stop-color=\"#AC2D73\" offset=\"0%\"></stop>\n            <stop stop-color=\"#120A82\" offset=\"92%\"></stop>\n            <stop stop-color=\"#07006B\" offset=\"100%\"></stop>\n        </radialGradient>\n        <linearGradient x1=\"90.5072268%\" y1=\"20.6957496%\" x2=\"9.4941375%\" y2=\"79.3043243%\" id=\"linearGradient-2\">\n            <stop stop-color=\"#3B2EE8\" stop-opacity=\"0.2\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FC429F\" offset=\"25%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"87%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"126.40209%\" y1=\"13.5040932%\" x2=\"-24.1592819%\" y2=\"87.2715353%\" id=\"linearGradient-3\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"67.8867993%\" y1=\"30.9688504%\" x2=\"75.4688625%\" y2=\"21.1618118%\" id=\"linearGradient-4\">\n            <stop stop-color=\"#FC57A9\" offset=\"0%\"></stop>\n            <stop stop-color=\"#FCFCFC\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"61.4131653%\" y1=\"33.8941487%\" x2=\"39.4202448%\" y2=\"71.4869303%\" id=\"linearGradient-5\">\n            <stop stop-color=\"#B639E5\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3B2EE8\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"92.2146132%\" y1=\"-4.63859816%\" x2=\"10.4535745%\" y2=\"110.070945%\" id=\"linearGradient-6\">\n            <stop stop-color=\"#FC429F\" offset=\"0%\"></stop>\n            <stop stop-color=\"#B639E5\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"iPhone-8\" transform=\"translate(-177.000000, -198.000000)\">\n            <g id=\"\u97F3\u4E50\" transform=\"translate(177.000000, 198.000000)\">\n                <g id=\"\u5FAA\u73AF\u6A21\u5F0F\">\n                    <g id=\"\u56FE-\u8D44\u6E90-12\">\n                        <ellipse id=\"Oval\" fill=\"url(#radialGradient-1)\" cx=\"60\" cy=\"60.3278689\" rx=\"56.0655738\" ry=\"56.3934426\"></ellipse>\n                        <path d=\"M59.9548308,5.61469731 C86.7262364,5.59034291 109.53495,25.1646104 113.727249,51.7617846 C117.919548,78.3589588 102.24883,104.07023 76.7829298,112.377093 C51.3170297,120.683956 23.6283668,109.116322 11.5058441,85.1059517 C-0.616678668,61.0955812 6.4316347,31.7820844 28.1225135,15.9982575 C37.381525,9.2515634 48.5217809,5.61766153 59.9548308,5.61469731 Z M59.9548308,3.93450958 C33.9678996,3.96156583 11.4045662,21.9459534 5.43790156,47.387911 C-0.528763057,72.8298686 11.6648878,99.0619808 34.8998782,110.769246 C42.7110885,114.676325 51.3147233,116.713418 60.0383473,116.721311 C81.0928073,116.708669 100.365002,104.83052 109.936925,85.9670171 C119.508848,67.1035138 117.766372,44.4356389 105.425394,27.2765176 C94.8863331,12.5904686 77.9653263,3.9033857 59.9590067,3.93450958 L59.9548308,3.93450958 Z\" id=\"Shape\" fill=\"url(#linearGradient-2)\" fill-rule=\"nonzero\"></path>\n                        <path d=\"M3.10837279,78.6885246 C-5.35495222,53.4533715 3.8779541,25.6687872 25.7703616,10.4918033 L28.852459,14.9558468 C8.92145404,28.7385915 0.519285038,54.0210331 8.24380779,76.9680513 L3.10837279,78.6885246 Z\" id=\"Path\" fill=\"url(#linearGradient-3)\"></path>\n                        <path d=\"M114.245163,65.6499501 C116.372688,46.0329572 107.677121,26.8058523 91.5234854,15.4091655 C75.3698494,4.01247878 54.2926478,2.23434907 36.4483634,10.7628794 L34.0983607,5.8762456 C53.7206607,-3.5030912 76.898549,-1.5488063 94.6627212,10.9828374 C112.426893,23.5144812 121.990192,44.6572978 119.651842,66.2295082 L114.245163,65.6499501 Z\" id=\"Path\" fill=\"url(#linearGradient-4)\"></path>\n                        <path d=\"M54.6247073,120 C35.5244375,118.320115 18.3772721,107.417802 8.52459016,90.6891545 L13.1637002,87.8688525 C22.1211082,103.081395 37.7137233,112.995026 55.0819672,114.520073 L54.6247073,120 Z\" id=\"Path\" fill=\"url(#linearGradient-5)\"></path>\n                        <path d=\"M64.6784245,119.344262 L64.2622951,113.931055 C86.6626643,112.2425 105.714136,96.9321406 112.196238,75.4098361 L117.377049,76.9630103 C110.258865,100.635232 89.3126319,117.480598 64.6784245,119.344262 Z\" id=\"Path\" fill=\"url(#linearGradient-6)\"></path>\n                    </g>\n                </g>\n                <path d=\"M81.9995133,45.5272371 C81.9995133,41.9976357 80.5777262,39.1739546 78.208081,37.2915005 C75.3645068,35.1737397 71.810039,34.4678194 68.2555712,35.4090464 L54.7485937,38.9386478 C47.8766227,40.8211019 42.4264388,47.644998 42.4264388,54.4688941 L42.4264388,71.4109808 C41.4785807,71.1756741 40.7676872,70.9403673 39.5828646,70.9403673 C35.5544678,70.9403673 32,74.234662 32,78.4701837 C32,82.7057053 35.3175033,86 39.5828646,86 C43.8482259,86 47.1657291,82.7057053 47.1657291,78.4701837 L47.1657291,61.7634036 L77.0232584,54.4688941 L77.0232584,68.3519929 C76.0754003,68.1166862 75.3645068,67.8813794 74.1796842,67.8813794 C70.1512874,67.8813794 66.5968196,71.1756741 66.5968196,75.4111958 C66.5968196,79.6467175 69.9143229,82.9410121 74.1796842,82.9410121 C78.4450455,82.9410121 81.7625488,79.6467175 81.7625488,75.4111958 C81.7625488,75.175889 81.7625488,75.175889 81.7625488,74.9405822 C81.7625488,74.9405822 81.7625488,74.7052755 81.7625488,74.7052755 C81.9198762,55.3331567 81.9988643,45.6071439 81.9995133,45.5272371 C82.0001622,45.4473304 82.0001622,45.4473304 81.9995133,45.5272371 Z M40,82 C38.5,82 37,80.75 37,79 C37,77.25 38.25,76 40,76 C41.75,76 43,77.25 43,79 C43,80.75 41.5,82 40,82 Z M47,57 L47,54.6712329 C47,50.0136986 51.047619,45.1232877 55.8095238,43.7260274 L69.3809524,40.2328767 C71.5238095,39.7671233 73.4285714,40 74.8571429,40.9315068 C76.2857143,41.8630137 77,43.4931507 77,45.5890411 L77,49.7808219 L47,57 Z M74,79 C72.5,79 71,77.75 71,76 C71,74.25 72.25,73 74,73 C75.75,73 77,74.25 77,76 C77,77.75 75.5,79 74,79 Z\" id=\"Shape\" fill=\"#FFFFFF\" fill-rule=\"nonzero\"></path>\n            </g>\n        </g>\n    </g>\n</symbol>\n\n</svg>\n\n\n";
},{}],"src/javascript/swiper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swiper = function Swiper(node) {
  _classCallCheck(this, Swiper);

  if (!node) throw new Error("需要传递需要绑定的 DOM 元素");
  var root = typeof node === "string" ? document.querySelector(node) : node;
  var eventHub = {
    "swipLeft": [],
    "swipRight": []
  };
  var initX;
  var newX;
  var clock;
  root.addEventListener("touchstart", function (e) {
    initX = e.changedTouches[0].pageX;
  });
  root.addEventListener("touchmove", function (e) {
    if (clock) {
      clearInterval(clock);
    }

    clock = setTimeout(function () {
      newX = e.changedTouches[0].pageX;

      if (newX - initX > 10) {
        eventHub["swipRight"].forEach(function (fn) {
          return fn.bind(root)();
        });
      } else if (initX - newX > 10) {
        eventHub["swipLeft"].forEach(function (fn) {
          return fn.bind(root)();
        });
      }
    }, 100);
  });

  this.on = function (type, fn) {
    if (eventHub[type]) {
      eventHub[type].push(fn);
    }
  };

  this.off = function (type, fn) {
    var index = eventHub[type].indexOf(fn);

    if (index !== -1) {
      eventHub[type].splice(index, 1);
    }
  };
};

var _default = Swiper;
exports.default = _default;
},{}],"src/javascript/index.js":[function(require,module,exports) {
"use strict";

require("./icons.js");

var _swiper = _interopRequireDefault(require("./swiper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("Hello, Oli");

var Player =
/*#__PURE__*/
function () {
  function Player(node) {
    var _this = this;

    _classCallCheck(this, Player);

    this.root = typeof node === "string" ? document.querySelector(node) : node;

    this.$ = function (selector) {
      return _this.root.querySelector(selector);
    };

    this.$$ = function (selector) {
      return _this.root.querySelectorAll(selector);
    };

    this.songList = [];
    this.currentIndex = 1;
    this.audio = new Audio();
    this.start();
    this.bind();
    this.lyricsArr = [];
    this.lyricIndex = -1;
  }

  _createClass(Player, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      fetch("https://qdywxs.github.io/data-mock/qdywxs-music/music-list.json").then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);
        _this2.songList = data;

        _this2.loadSong();
      });
    }
  }, {
    key: "loadSong",
    value: function loadSong() {
      var _this3 = this;

      var songObj = this.songList[this.currentIndex];
      this.audio.src = songObj.url;
      this.$(".header h1").innerText = songObj.title;
      this.$(".header p").innerText = songObj.author + "-" + songObj.album;

      this.audio.onloadedmetadata = function () {
        return _this3.$('.time-end').innerText = _this3.formateTime(_this3.audio.duration);
      };

      this.loadLyric();
    }
  }, {
    key: "bind",
    value: function bind() {
      var self = this;

      this.$(".btn-play-pause").onclick = function () {
        if (this.classList.contains("playing")) {
          self.audio.pause();
          this.classList.remove("playing");
          this.classList.add("pause");
          this.querySelector("use").setAttribute("xlink:href", "#icon-play");
        } else if (this.classList.contains("pause")) {
          self.audio.play();
          this.classList.remove("pause");
          this.classList.add("playing");
          this.querySelector("use").setAttribute("xlink:href", "#icon-pause");
        }
      };

      this.$(".btn-pre").onclick = function () {
        console.log("pre");
        self.currentIndex = (self.currentIndex - 1 + self.songList.length) % self.songList.length;
        self.loadSong();
        self.playSong();
      };

      this.$(".btn-next").onclick = function () {
        console.log("next");
        self.currentIndex = (self.currentIndex + 1) % self.songList.length;
        self.loadSong();
        self.playSong();
      };

      var swiper = new _swiper.default(this.$(".panels"));
      swiper.on("swipLeft", function () {
        this.classList.remove("panel1");
        this.classList.add("panel2");
        console.log("left");
      });
      swiper.on("swipRight", function () {
        this.classList.remove("panel2");
        this.classList.add("panel1");
        console.log("right");
      });

      this.audio.ontimeupdate = function () {
        self.locateLyric();
        self.setProgressBar();
      };
    }
  }, {
    key: "playSong",
    value: function playSong() {
      var _this4 = this;

      this.audio.oncanplaythrough = function () {
        return _this4.audio.play();
      };
    }
  }, {
    key: "loadLyric",
    value: function loadLyric() {
      var _this5 = this;

      fetch(this.songList[this.currentIndex].lyric).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data.lrc.lyric);

        _this5.setLyrics(data.lrc.lyric);

        window.lyrics = data.lrc.lyric;
      });
    }
  }, {
    key: "setLyrics",
    value: function setLyrics(lyrics) {
      this.lyricIndex = 0;
      var fragment = document.createDocumentFragment();
      var lyricsArr = [];
      this.lyricsArr = lyricsArr;
      lyrics.split(/\n/).filter(function (str) {
        return str.match(/\[.+?\]/);
      }).forEach(function (line) {
        var str = line.replace(/\[.+?\]/g, "");
        line.match(/\[.+?\]/g).forEach(function (t) {
          t = t.replace(/[\[\]]/g, "");
          var milliseconds = parseInt(t.slice(0, 2)) * 60 * 1000 + parseInt(t.slice(3, 5)) * 1000 + parseInt(t.slice(6));
          lyricsArr.push([milliseconds, str]);
        });
      });
      lyricsArr.filter(function (line) {
        return line[1].trim() !== "";
      }).sort(function (v1, v2) {
        if (v1[0] > v2[0]) {
          return 1;
        } else {
          return -1;
        }
      }).forEach(function (line) {
        var node = document.createElement("p");
        node.setAttribute("data-time", line[0]);
        node.innerText = line[1];
        fragment.appendChild(node);
      });
      this.$(".panel-lyrics .container").innerHTML = "";
      this.$(".panel-lyrics .container").appendChild(fragment);
    }
  }, {
    key: "locateLyric",
    value: function locateLyric() {
      console.log("locateLyric");
      var currentTime = this.audio.currentTime * 1000;
      var nextLineTime = this.lyricsArr[this.lyricIndex + 1][0];

      if (currentTime > nextLineTime && this.lyricIndex < this.lyricsArr.length - 1) {
        this.lyricIndex++;
        var node = this.$('[data-time="' + this.lyricsArr[this.lyricIndex][0] + '"]');
        if (node) this.setLyricToCenter(node);
        this.$$(".panel-effect .lyric p")[0].innerText = this.lyricsArr[this.lyricIndex][1];
        this.$$(".panel-effect .lyric p")[1].innerText = this.lyricsArr[this.lyricIndex + 1] ? this.lyricsArr[this.lyricIndex + 1][1] : '';
      }
    }
  }, {
    key: "setLyricToCenter",
    value: function setLyricToCenter(node) {
      console.log(node);
      var translateY = node.offsetTop - this.$(".panel-lyrics").offsetHeight / 2;
      translateY = translateY > 0 ? translateY : 0;
      this.$(".panel-lyrics .container").style.transform = "translateY(-".concat(translateY, "px)");
      this.$$(".panel-lyrics p").forEach(function (node) {
        return node.classList.remove("current");
      });
      node.classList.add("current");
    }
  }, {
    key: "setProgressBar",
    value: function setProgressBar() {
      console.log("set setProgressBar");
      var percent = this.audio.currentTime * 100 / this.audio.duration + "%";
      console.log(percent);
      this.$(".bar .progress").style.width = percent;
      this.$(".time-start").innerText = this.formateTime(this.audio.currentTime);
      console.log(this.$(".bar .progress").style.width);
    }
  }, {
    key: "formateTime",
    value: function formateTime(secondsTotal) {
      var minutes = parseInt(secondsTotal / 60);
      minutes = minutes >= 10 ? "" + minutes : "0" + minutes;
      var seconds = parseInt(secondsTotal % 60);
      seconds = seconds >= 10 ? "" + seconds : "0" + seconds;
      return minutes + ":" + seconds;
    }
  }]);

  return Player;
}();

window.p = new Player("#player");
},{"./icons.js":"src/javascript/icons.js","./swiper.js":"src/javascript/swiper.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64391" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/javascript/index.js"], null)
//# sourceMappingURL=/javascript.19a21263.js.map