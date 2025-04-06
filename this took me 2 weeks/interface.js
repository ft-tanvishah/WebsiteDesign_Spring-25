!function() {
    var a, o = window.location, r = window.document, t = r.currentScript, l = t.getAttribute("data-api") || new URL(t.src).origin + "/api/event", s = t.getAttribute("data-domain");
    function c(t, e, n) {
        e && console.warn("Ignoring Event: " + e),
        n && n.callback && n.callback(),
        "pageview" === t && (a = !0)
    }
    var d = o.href
      , u = {}
      , w = -1
      , v = !1
      , p = null
      , h = 0;
    function n() {
        var t = r.body || {}
          , e = r.documentElement || {};
        return Math.max(t.scrollHeight || 0, t.offsetHeight || 0, t.clientHeight || 0, e.scrollHeight || 0, e.offsetHeight || 0, e.clientHeight || 0)
    }
    function e() {
        var t = r.body || {}
          , e = r.documentElement || {}
          , n = window.innerHeight || e.clientHeight || 0
          , e = window.scrollY || e.scrollTop || t.scrollTop || 0;
        return f <= n ? f : e + n
    }
    function i() {
        return p ? h + (Date.now() - p) : h
    }
    var f = n()
      , g = e();
    function b() {
        var t = i();
        !a && (w < g || 3e3 <= t) && (w = g,
        t = {
            n: "engagement",
            sd: Math.round(g / f * 100),
            d: s,
            u: d,
            p: u,
            e: t,
            v: 1
        },
        p = null,
        h = 0,
        S(l, t))
    }
    function m() {
        "visible" === r.visibilityState && r.hasFocus() && null === p ? p = Date.now() : "hidden" !== r.visibilityState && r.hasFocus() || (h = i(),
        p = null,
        b())
    }
    function y(t, e) {
        var n = "pageview" === t;
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname) || "file:" === o.protocol)
            return c(t, "localhost", e);
        if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible)
            return c(t, null, e);
        try {
            if ("true" === window.localStorage.plausible_ignore)
                return c(t, "localStorage flag", e)
        } catch (t) {}
        var i = {};
        i.n = t,
        i.v = 1,
        i.u = o.href,
        i.d = s,
        i.r = r.referrer || null,
        e && e.meta && (i.m = JSON.stringify(e.meta)),
        e && e.props && (i.p = e.props),
        n && (a = !1,
        d = i.u,
        u = i.p,
        w = -1,
        h = 0,
        p = Date.now(),
        v || (r.addEventListener("visibilitychange", m),
        window.addEventListener("blur", m),
        window.addEventListener("focus", m),
        v = !0)),
        S(l, i, e)
    }
    function S(t, e, n) {
        window.fetch && fetch(t, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            keepalive: !0,
            body: JSON.stringify(e)
        }).then(function(t) {
            n && n.callback && n.callback({
                status: t.status
            })
        })
    }
    window.addEventListener("load", function() {
        f = n();
        var t = 0
          , e = setInterval(function() {
            f = n(),
            15 == ++t && clearInterval(e)
        }, 200)
    }),
    r.addEventListener("scroll", function() {
        f = n();
        var t = e();
        g < t && (g = t)
    });
    var E = window.plausible && window.plausible.q || [];
    window.plausible = y;
    for (var L, H = 0; H < E.length; H++)
        y.apply(this, E[H]);
    function _(t) {
        t && L === o.pathname || (t && v && (b(),
        f = n(),
        g = e()),
        L = o.pathname,
        y("pageview"))
    }
    function k() {
        _(!0)
    }
    var T, t = window.history;
    t.pushState && (T = t.pushState,
    t.pushState = function() {
        T.apply(this, arguments),
        k()
    }
    ,
    window.addEventListener("popstate", k)),
    "prerender" === r.visibilityState ? r.addEventListener("visibilitychange", function() {
        L || "visible" !== r.visibilityState || _()
    }) : _(),
    window.addEventListener("pageshow", function(t) {
        t.persisted && _()
    })
}();

$(document).ready(function() {

    addlinkhrefs();
    opening();
    $('a.externallink, a.internallink, a.footnoteexternallink').attr('target', '_blank');
    pagetitle();
    subjectline();
    getAge();
  });
  
  
  function opening() {
  //this is the bit of code that makes the whole opening and closing text thing work.
    $('a[data-o]').click(function(e) {
  
      //this line just stops it visiting the href which is always #
      e.preventDefault();
  
      var openedby = $(this).attr('data-o');
      $('[data-ob="' + openedby +'"]').removeClass('off').addClass('on');
  
      var closedby = $(this).attr('data-c');
      $('[data-cb="' + closedby +'"]').remove();
  
      $(this).contents().unwrap();
  
      linkcount();
  
    });
  }
  
  
  function linkcount() {
  //this does nothing, just ignore it, don't worry about it. It counts the links you have left, that's all.
  
    var availablelinks = $("a:visible").not(".externallink").not(".internallink").not("footnoteexternallink").length;
    if (availablelinks == 0) {
      setTimeout(
        function() {
          console.log('I don’t know if you made it through all those links in the hope of earning my respect, but what has occurred is quite the opposite.');
          $('#nothing').css('display','inline');
      }, 1500);
  
    }
  }
  
  function pagetitle() {
  //randomises the page title from a small handful of uninteresting options
  
      var pagetitles = ["A website about me , a human no one asked about", "animadeawebsite", "this took me 2 weeks", "“See I was trying to amke a real story anrrative website but then I saw this reddit thread witha youtube tutorial talking about how you can make narrative websites with just words on a single page but I would need to java script for it but I didnt know any javascript so I copied a code froma  tutorial but the HTML and CSS is all me”", "project 2: my narrative website","oi oi baguatte"];
      var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
  
      $(document).attr('title', pagetitles[pickpagetitle]);
  
  }
  
  function subjectline() {
    //the same as the page title one, only this is possible email subject lines if you make the mistake of trying to email me.
  
      var emailsubjects = ["I wanted to tell you about a dream I had where I hired you", "Flattery and a Job Offer", "Job Offer", "christ this website... something is wrong with you but please accept my job offer", "Have you ever thought about being ceo?here is a job offer", "This is something I have never told anyone, but I want to give you this 5 billion dolalr sign on bonus"];
  
      var pickemailsubject = Math.floor(Math.random()*emailsubjects.length);
  
      $('a[href="mailto:alantrotter@gmail.com"]').attr("href", "mailto:alantrotter@gmail.com?subject=" + emailsubjects[pickemailsubject]);
  
  }
  
  function addlinkhrefs() {
    $('a').not(".internallink").not(".externallink").not(".footnoteexternallink").attr("href","#");
  
  }
  
  function getAge() {
    var dob = "2003-06-12"
    dob = new Date(dob);
    var today = new Date();
    var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
    $('#age').text(age);
  }
  