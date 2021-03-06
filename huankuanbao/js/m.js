/**
 * Created by huipu on 2017/8/31.
 */
/*! Mobiscroll v2.13.2 | (c) 2011, 2014 Acid Media, Inc. */
!
    function(a, b) {
        function c(a) {
            var c;
            for (c in a) if (j[a[c]] !== b) return ! 0;
            return ! 1
        }
        function d() {
            var a, b = ["Webkit", "Moz", "O", "ms"];
            for (a in b) if (c([b[a] + "Transform"])) return "-" + b[a].toLowerCase() + "-";
            return ""
        }
        function e(c, d, e) {
            var g = c;
            return "object" == typeof d ? c.each(function() {
                this.id || (this.id = "mobiscroll" + ++f),
                h[this.id] && h[this.id].destroy(),
                    new a.mobiscroll.classes[d.component || "Scroller"](this, d)
            }) : ("string" == typeof d && c.each(function() {
                var a, c = h[this.id];
                return c && c[d] && (a = c[d].apply(this, Array.prototype.slice.call(e, 1)), a !== b) ? (g = a, !1) : void 0
            }), g)
        }
        var f = +new Date,
            g = {},
            h = {},
            i = a.extend,
            j = document.createElement("modernizr").style,
            k = c(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
            l = c(["flex", "msFlex", "WebkitBoxDirection"]),
            m = d(),
            n = m.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz");
        a.fn.mobiscroll = function(b) {
            return i(this, a.mobiscroll.components),
                e(this, b, arguments)
        },
            a.mobiscroll = a.mobiscroll || {
                    version: "2.13.2",
                    util: {
                        prefix: m,
                        jsPrefix: n,
                        has3d: k,
                        hasFlex: l,
                        testTouch: function(a) {
                            if ("touchstart" == a.type) g[a.target] = !0;
                            else if (g[a.target]) return delete g[a.target],
                                !1;
                            return ! 0
                        },
                        isNumeric: function(a) {
                            return a - parseFloat(a) >= 0
                        },
                        getCoord: function(a, b) {
                            var c = a.originalEvent || a;
                            return c.changedTouches ? c.changedTouches[0]["page" + b] : a["page" + b]
                        },
                        constrain: function(a, b, c) {
                            return Math.max(b, Math.min(a, c))
                        }
                    },
                    tapped: !1,
                    presets: {
                        scroller: {},
                        numpad: {}
                    },
                    themes: {
                        listview: {}
                    },
                    i18n: {},
                    instances: h,
                    classes: {},
                    components: {},
                    defaults: {
                        theme: "mobiscroll",
                        context: "body"
                    },
                    userdef: {},
                    setDefaults: function(a) {
                        i(this.userdef, a)
                    },
                    presetShort: function(a, c, d) {
                        this.components[a] = function(f) {
                            return e(this, i(f, {
                                component: c,
                                preset: d === !1 ? b: a
                            }), arguments)
                        }
                    }
                },
            a.scroller = a.scroller || a.mobiscroll,
            a.fn.scroller = a.fn.scroller || a.fn.mobiscroll
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.cs = a.extend(a.mobiscroll.i18n.cs, {
            setText: "Zadej",
            cancelText: "Storno",
            clearText: "Vymazat",
            selectedText: "Označený",
            dateFormat: "dd/mm/yy",
            dateOrder: "ddmmy",
            dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
            dayText: "Den",
            hourText: "Hodiny",
            minuteText: "Minuty",
            monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
            monthText: "Měsíc",
            secText: "Sekundy",
            timeFormat: "hh:ii A",
            timeWheels: "hhiiA",
            yearText: "Rok",
            nowText: "Teď",
            amText: "am",
            pmText: "pm",
            dateText: "Datum",
            timeText: "Čas",
            calendarText: "Kalendář",
            closeText: "Zavřít",
            fromText: "Začátek",
            toText: "Konec",
            wholeText: "Celý",
            fractionText: "Část",
            unitText: "Jednotka",
            labels: ["Roky", "Měsíce", "Dny", "Hodiny", "Minuty", "Sekundy", ""],
            labelsShort: ["Rok", "Měs", "Dny", "Hod", "Min", "Sec", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Resetovat",
            lapText: "Etapa",
            hideText: "Schovat"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.de = a.extend(a.mobiscroll.i18n.de, {
            setText: "OK",
            cancelText: "Abbrechen",
            clearText: "Löschen",
            selectedText: "Ausgewählt",
            dateFormat: "dd.mm.yy",
            dateOrder: "ddmmyy",
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
            dayText: "Tag",
            delimiter: ".",
            hourText: "Stunde",
            minuteText: "Minuten",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            monthText: "Monat",
            secText: "Sekunden",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Jahr",
            nowText: "Jetzt",
            pmText: "nachm.",
            amText: "vorm.",
            dateText: "Datum",
            timeText: "Zeit",
            calendarText: "Kalender",
            closeText: "Schließen",
            fromText: "Von",
            toText: "Um",
            wholeText: "Ganze Zahl",
            fractionText: "Bruchzahl",
            unitText: "Maßeinheit",
            labels: ["Jahre", "Monate", "Tage", "Stunden", "Minuten", "Sekunden", ""],
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
            startText: "Starten",
            stopText: "Stoppen",
            resetText: "Zurücksetzen",
            lapText: "Lap",
            hideText: "Ausblenden"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n["en-GB"] = a.mobiscroll.i18n["en-UK"] = a.extend(a.mobiscroll.i18n["en-UK"], {
            dateFormat: "dd/mm/yy",
            dateOrder: "ddmmy"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.es = a.extend(a.mobiscroll.i18n.es, {
            setText: "Aceptar",
            cancelText: "Cancelar",
            clearText: "Claro",
            selectedText: "Seleccionado",
            dateFormat: "dd/mm/yy",
            dateOrder: "ddmmyy",
            dayNames: ["Domingo", "Lunes", "Martes", "Mi&#xE9;rcoles", "Jueves", "Viernes", "S&#xE1;bado"],
            dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "S&#xE1;"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            dayText: "D&#237;a",
            hourText: "Horas",
            minuteText: "Minutos",
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            monthText: "Mes",
            secText: "Segundos",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "A&ntilde;o",
            nowText: "Ahora",
            pmText: "pm",
            amText: "am",
            dateText: "Fecha",
            timeText: "Tiempo",
            calendarText: "Calendario",
            closeText: "Cerrar",
            fromText: "Iniciar",
            toText: "Final",
            wholeText: "Entero",
            fractionText: "Fracción",
            unitText: "Unidad",
            labels: ["Años", "Meses", "Días", "Horas", "Minutos", "Segundos", ""],
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
            startText: "Iniciar",
            stopText: "Deténgase",
            resetText: "Reinicializar",
            lapText: "Lap",
            hideText: "Esconder"
        })
    } (jQuery),
    function(a) {
        var b = {
            gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
        };
        b.jalaliToGregorian = function(a, c, d) {
            a = parseInt(a),
                c = parseInt(c),
                d = parseInt(d);
            var e, f = a - 979,
                g = c - 1,
                h = d - 1,
                i = 365 * f + 8 * parseInt(f / 33) + parseInt((f % 33 + 3) / 4);
            for (e = 0; g > e; ++e) i += b.jDaysInMonth[e];
            i += h;
            var j = i + 79,
                k = 1600 + 400 * parseInt(j / 146097);
            j %= 146097;
            var l = !0;
            for (j >= 36525 && (j--, k += 100 * parseInt(j / 36524), j %= 36524, j >= 365 ? j++:l = !1), k += 4 * parseInt(j / 1461), j %= 1461, j >= 366 && (l = !1, j--, k += parseInt(j / 365), j %= 365), e = 0; j >= b.gDaysInMonth[e] + (1 == e && l); e++) j -= b.gDaysInMonth[e] + (1 == e && l);
            var m = e + 1,
                n = j + 1;
            return [k, m, n]
        },
            b.checkDate = function(a, c, d) {
                return ! (0 > a || a > 32767 || 1 > c || c > 12 || 1 > d || d > b.jDaysInMonth[c - 1] + (12 == c && (a - 979) % 33 % 4 === 0))
            },
            b.gregorianToJalali = function(a, c, d) {
                a = parseInt(a),
                    c = parseInt(c),
                    d = parseInt(d);
                var e, f = a - 1600,
                    g = c - 1,
                    h = d - 1,
                    i = 365 * f + parseInt((f + 3) / 4) - parseInt((f + 99) / 100) + parseInt((f + 399) / 400);
                for (e = 0; g > e; ++e) i += b.gDaysInMonth[e];
                g > 1 && (f % 4 === 0 && f % 100 !== 0 || f % 400 === 0) && ++i,
                    i += h;
                var j = i - 79,
                    k = parseInt(j / 12053);
                j %= 12053;
                var l = 979 + 33 * k + 4 * parseInt(j / 1461);
                for (j %= 1461, j >= 366 && (l += parseInt((j - 1) / 365), j = (j - 1) % 365), e = 0; 11 > e && j >= b.jDaysInMonth[e]; ++e) j -= b.jDaysInMonth[e];
                var m = e + 1,
                    n = j + 1;
                return [l, m, n]
            },
            a.mobiscroll.i18n.fa = a.extend(a.mobiscroll.i18n.fa, {
                setText: "تاييد",
                cancelText: "انصراف",
                clearText: "واضح ",
                selectedText: "منتخب",
                dateFormat: "yy/mm/dd",
                dateOrder: "yymmdd",
                dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
                dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
                dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
                dayText: "روز",
                hourText: "ساعت",
                minuteText: "دقيقه",
                monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                monthText: "ماه",
                secText: "ثانيه",
                timeFormat: "HH:ii",
                timeWheels: "HHii",
                yearText: "سال",
                nowText: "اکنون",
                amText: "ب",
                pmText: "ص",
                getYear: function(a) {
                    return b.gregorianToJalali(a.getFullYear(), a.getMonth() + 1, a.getDate())[0]
                },
                getMonth: function(a) {
                    return--b.gregorianToJalali(a.getFullYear(), a.getMonth() + 1, a.getDate())[1]
                },
                getDay: function(a) {
                    return b.gregorianToJalali(a.getFullYear(), a.getMonth() + 1, a.getDate())[2]
                },
                getDate: function(a, c, d, e, f, g) {
                    0 > c && (a += Math.floor(c / 12), c = 12 + c % 12),
                    c > 11 && (a += Math.floor(c / 12), c %= 12);
                    var h = b.jalaliToGregorian(a, +c + 1, d);
                    return new Date(h[0], h[1] - 1, h[2], e || 0, f || 0, g || 0)
                },
                getMaxDayOfMonth: function(a, c) {
                    for (var d = 31; b.checkDate(a, c + 1, d) === !1;) d--;
                    return d
                },
                firstDay: 6,
                rtl: !0,
                dateText: "تاریخ ",
                timeText: "زمان ",
                calendarText: "تقویم",
                closeText: "نزدیک",
                fromText: "شروع ",
                toText: "پایان",
                wholeText: "تمام",
                fractionText: "کسر",
                unitText: "واحد",
                labels: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
                labelsShort: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
                startText: "شروع",
                stopText: "پايان",
                resetText: "تنظیم مجدد",
                lapText: "Lap",
                hideText: "پنهان کردن"
            })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.fr = a.extend(a.mobiscroll.i18n.fr, {
            setText: "Terminé",
            cancelText: "Annuler",
            clearText: "Effacer",
            selectedText: "Sélectionné",
            dateFormat: "dd/mm/yy",
            dateOrder: "ddmmyy",
            dayNames: ["&#68;imanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["&#68;im.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
            dayNamesMin: ["&#68;", "L", "M", "M", "J", "V", "S"],
            dayText: "Jour",
            monthText: "Mois",
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
            hourText: "Heures",
            minuteText: "Minutes",
            secText: "Secondes",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Année",
            nowText: "Maintenant",
            pmText: "après-midi",
            amText: "avant-midi",
            dateText: "Date",
            timeText: "Heure",
            calendarText: "Calendrier",
            closeText: "Fermer",
            fromText: "Démarrer",
            toText: "Fin",
            wholeText: "Entier",
            fractionText: "Fraction",
            unitText: "Unité",
            labels: ["Ans", "Mois", "Jours", "Heures", "Minutes", "Secondes", ""],
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
            startText: "Démarrer",
            stopText: "Arrêter",
            resetText: "Réinitialiser",
            lapText: "Lap",
            hideText: "Cachez"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.hu = a.extend(a.mobiscroll.i18n.hu, {
            setText: "OK",
            cancelText: "Mégse",
            clearText: "Törlés",
            selectedText: "Kiválasztva",
            dateFormat: "yy.mm.dd.",
            dateOrder: "yymmdd",
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
            dayText: "Nap",
            delimiter: ".",
            hourText: "Óra",
            minuteText: "Perc",
            monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            monthText: "Hónap",
            secText: "Másodperc",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Év",
            nowText: "Most",
            pmText: "de",
            amText: "du",
            firstDay: 1,
            dateText: "Dátum",
            timeText: "Idő",
            calendarText: "Naptár",
            todayText: "Ma",
            prevMonthText: "Előző hónap",
            nextMonthText: "Következő hónap",
            prevYearText: "Előző év",
            nextYearText: "Következő év",
            closeText: "Bezár",
            eventText: "esemény",
            eventsText: "esemény",
            fromText: "Eleje",
            toText: "Vége",
            wholeText: "Egész",
            fractionText: "Tört",
            unitText: "Egység",
            labels: ["Év", "Hónap", "Nap", "Óra", "Perc", "Másodperc", ""],
            labelsShort: ["Év", "Hó.", "Nap", "Óra", "Perc", "Mp.", ""],
            startText: "Indít",
            stopText: "Megállít",
            resetText: "Visszaállít",
            lapText: "Lap",
            hideText: "Elrejt"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.it = a.extend(a.mobiscroll.i18n.it, {
            setText: "OK",
            cancelText: "Annulla",
            clearText: "Chiarire",
            selectedText: "Selezionato",
            dateFormat: "dd-mm-yyyy",
            dateOrder: "ddmmyy",
            dayNames: ["Domenica", "Luned&Igrave;", "Merted&Igrave;", "Mercoled&Igrave;", "Gioved&Igrave;", "Venerd&Igrave;", "Sabato"],
            dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
            dayText: "Giorno",
            hourText: "Ore",
            minuteText: "Minuti",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            monthText: "Mese",
            secText: "Secondi",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Anno",
            nowText: "Ora",
            pmText: "pm",
            amText: "am",
            dateText: "Data",
            timeText: "Volta",
            calendarText: "Calendario",
            closeText: "Chiudere",
            fromText: "Inizio",
            toText: "Fine",
            wholeText: "Intero",
            fractionText: "Frazione",
            unitText: "Unità",
            labels: ["Anni", "Mesi", "Giorni", "Ore", "Minuti", "Secondi", ""],
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
            startText: "Inizio",
            stopText: "Arresto",
            resetText: "Ripristina",
            lapText: "Lap",
            hideText: "Nascondi"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.ja = a.extend(a.mobiscroll.i18n.ja, {
            setText: "セット",
            cancelText: "キャンセル",
            clearText: "クリア",
            selectedText: "選択",
            dateFormat: "yy年mm月dd日",
            dateOrder: "yymmdd",
            dayNames: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            dayText: "日",
            hourText: "時",
            minuteText: "分",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthText: "月",
            secText: "秒",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "年",
            nowText: "今",
            pmText: "午後",
            amText: "午前",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            dateText: "日付",
            timeText: "時間",
            calendarText: "カレンダー",
            closeText: "クローズ",
            fromText: "開始",
            toText: "終わり",
            wholeText: "全数",
            fractionText: "分数",
            unitText: "単位",
            labels: ["年間", "月間", "日間", "時間", "分", "秒", ""],
            labelsShort: ["年間", "月間", "日間", "時間", "分", "秒", ""],
            startText: "開始",
            stopText: "停止",
            resetText: "リセット",
            lapText: "ラップ",
            hideText: "隠す"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.nl = a.extend(a.mobiscroll.i18n.nl, {
            setText: "Instellen",
            cancelText: "Annuleren",
            clearText: "Duidelijk",
            selectedText: "Gekozen",
            dateFormat: "dd/mm/yy",
            dateOrder: "ddmmyy",
            dayNames: ["zondag", "maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            dayNamesShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            dayNamesMin: ["z", "m", "d", "w", "d", "v", "z"],
            dayText: "Dag",
            hourText: "Uur",
            minuteText: "Minuten",
            monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            monthText: "Maand",
            secText: "Seconden",
            timeFormat: "HH:ii",
            timeWheels: "hhii",
            yearText: "Jaar",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            dateText: "Datum",
            timeText: "Tijd",
            calendarText: "Kalender",
            closeText: "Sluiten",
            fromText: "Start",
            toText: "Einde",
            wholeText: "geheel",
            fractionText: "fractie",
            unitText: "eenheid",
            labels: ["Jaren", "Maanden", "Dagen", "Uren", "Minuten", "Seconden", ""],
            labelsShort: ["j", "m", "d", "u", "min", "sec", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Reset",
            lapText: "Ronde",
            hideText: "Verbergen"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.no = a.extend(a.mobiscroll.i18n.no, {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Tømme",
            selectedText: "Valgt",
            dateFormat: "dd.mm.yy",
            dateOrder: "ddmmyy",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            dayText: "Dag",
            delimiter: ".",
            hourText: "Time",
            minuteText: "Minutt",
            monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            monthText: "Måned",
            secText: "Sekund",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "År",
            nowText: "Nå",
            pmText: "pm",
            amText: "am",
            dateText: "Dato",
            timeText: "Tid",
            calendarText: "Kalender",
            closeText: "Lukk",
            fromText: "Start",
            toText: "End",
            wholeText: "Hele",
            fractionText: "Fraksjon",
            unitText: "Enhet",
            labels: ["År", "Måneder", "Dager", "Timer", "Minutter", "Sekunder", ""],
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
            startText: "Start",
            stopText: "Stopp",
            resetText: "Tilbakestille",
            lapText: "Runde",
            hideText: "Skjul"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.pl = a.extend(a.mobiscroll.i18n.pl, {
            setText: "Zestaw",
            cancelText: "Anuluj",
            clearText: "Oczyścić",
            selectedText: "Wybór",
            dateFormat: "yy-mm-dd",
            dateOrder: "ddmmy",
            dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
            dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
            dayText: "Dzień",
            hourText: "Godziny",
            minuteText: "Minuty",
            monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
            monthText: "Miesiąc",
            secText: "Sekundy",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Rok",
            nowText: "Teraz",
            amText: "rano",
            pmText: "po południu",
            dateText: "Data",
            timeText: "Czas",
            calendarText: "Kalendarz",
            closeText: "Zakończenie",
            fromText: "Rozpoczęcie",
            toText: "Koniec",
            wholeText: "Cały",
            fractionText: "Ułamek",
            unitText: "Jednostka",
            labels: ["Lata", "Miesiąc", "Dni", "Godziny", "Minuty", "Sekundy", ""],
            labelsShort: ["R", "M", "Dz", "Godz", "Min", "Sek", ""],
            startText: "Rozpoczęcie",
            stopText: "Zatrzymać",
            resetText: "Zresetować",
            lapText: "Zakładka",
            hideText: "Ukryć"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n["pt-BR"] = a.extend(a.mobiscroll.i18n["pt-BR"], {
            setText: "Selecionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            selectedText: "Selecionado",
            dateFormat: "dd/mm/yy",
            dateOrder: "ddMMyy",
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            dayText: "Dia",
            hourText: "Hora",
            minuteText: "Minutos",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            monthText: "Mês",
            secText: "Segundo",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Ano",
            nowText: "Agora",
            pmText: "da tarde",
            amText: "da manhã",
            dateText: "Data",
            timeText: "Tempo",
            calendarText: "Calendário",
            closeText: "Fechar",
            fromText: "In&iacute;cio",
            toText: "Fim",
            wholeText: "Inteiro",
            fractionText: "Fração",
            unitText: "Unidade",
            labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
            startText: "Começar",
            stopText: "Pare",
            resetText: "Reinicializar",
            lapText: "Lap",
            hideText: "Esconder"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n["pt-PT"] = a.extend(a.mobiscroll.i18n["pt-PT"], {
            setText: "Seleccionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            selectedText: "Selecionado",
            dateFormat: "dd-mm-yy",
            dateOrder: "ddMMyy",
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            dayText: "Dia",
            hourText: "Horas",
            minuteText: "Minutos",
            monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            monthText: "M&ecirc;s",
            secText: "Segundo",
            timeFormat: "HH:ii:ss",
            timeWheels: "HHiiss",
            yearText: "Ano",
            nowText: "Actualizar",
            pmText: "da tarde",
            amText: "da manhã",
            dateText: "Data",
            timeText: "Tempo",
            calendarText: "Calend&aacute;rio",
            closeText: "Fechar",
            fromText: "In&iacute;cio",
            toText: "Fim",
            wholeText: "Inteiro",
            fractionText: "Frac&ccedil;&atilde;o",
            unitText: "Unidade",
            labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
            labelsShort: ["Ano", "M&ecirc;s", "Dia", "Hora", "Min", "Seg", ""],
            startText: "Come&ccedil;ar",
            stopText: "Parar",
            resetText: "Reinicializar",
            lapText: "Lap",
            hideText: "Esconder"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.ro = a.extend(a.mobiscroll.i18n.ro, {
            setText: "Setare",
            cancelText: "Anulare",
            clearText: "Ştergere",
            selectedText: "Selectat",
            dateFormat: "dd.mm.yy",
            dateOrder: "ddmmy",
            dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            dayText: " Ziua",
            delimiter: ".",
            hourText: " Ore ",
            minuteText: "Minute",
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
            monthText: "Luna",
            secText: "Secunde",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Anul",
            nowText: "Acum",
            amText: "am",
            pmText: "pm",
            dateText: "Data",
            timeText: "Ora",
            calendarText: "Calendar",
            closeText: "Închidere",
            fromText: "Start",
            toText: "Final",
            wholeText: "Complet",
            fractionText: "Parţial",
            unitText: "Unitate",
            labels: ["Ani", "Luni", "Zile", "Ore", "Minute", "Secunde", ""],
            labelsShort: ["Ani", "Luni", "Zile", "Ore", "Min.", "Sec.", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Resetare",
            lapText: "Tură",
            hideText: "Ascundere"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n["ru-UA"] = a.extend(a.mobiscroll.i18n["ru-UA"], {
            setText: "Установить",
            cancelText: "Отменить",
            clearText: "Очиститьr",
            selectedText: "Вібрать",
            dateFormat: "dd.mm.yy",
            dateOrder: "ddmmy",
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
            dayText: "День",
            delimiter: ".",
            hourText: "Часы",
            minuteText: "Минуты",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
            monthText: "Месяцы",
            secText: "Сикунды",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Год",
            nowText: "Сейчас",
            amText: "До полудня",
            pmText: "После полудня",
            dateText: "Дата",
            timeText: "Время",
            calendarText: "Календарь",
            closeText: "Закрыть",
            fromText: "Начало",
            toText: "Конец",
            wholeText: "Весь",
            fractionText: "Часть",
            unitText: "Единица",
            labels: ["Годы", " Месяцы ", " Дни ", " Часы ", " Минуты ", " Секунды", ""],
            labelsShort: ["Год", "Мес.", "Дн.", "Ч.", "Мин.", "Сек.", ""],
            startText: "Старт",
            stopText: "Стоп",
            resetText: " Сброс ",
            lapText: " Этап ",
            hideText: " Скрыть "
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n["ru-RU"] = a.mobiscroll.i18n.ru = a.extend(a.mobiscroll.i18n.ru, {
            setText: "Установить",
            cancelText: "Отмена",
            clearText: "Очистить",
            selectedText: "Выбрать",
            dateFormat: "dd.mm.yy",
            dateOrder: "ddmmyy",
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayText: "День",
            delimiter: ".",
            hourText: "Час",
            minuteText: "Минут",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            monthText: "Месяц",
            secText: "Секунд",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "Год",
            nowText: "Сейчас",
            amText: "До полудня",
            pmText: "После полудня",
            dateText: "Дата",
            timeText: "Время",
            calendarText: "Календарь",
            closeText: "Закрыть",
            fromText: "Начало",
            toText: "Конец",
            wholeText: "Целое",
            fractionText: "Дробное",
            unitText: "Единица",
            labels: ["Лет", "Месяцев", "Дней", "Часов", "Минут", "Секунд", ""],
            labelsShort: ["Лет", "Мес", "Дн", "Час", "Мин", "Сек", ""],
            startText: "Старт",
            stopText: "Стоп",
            resetText: "Сбросить",
            lapText: "Круг",
            hideText: "Скрыть"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.sk = a.extend(a.mobiscroll.i18n.sk, {
            setText: "Zadaj",
            cancelText: "Zrušiť",
            clearText: "Vymazať",
            selectedText: "Označený",
            dateFormat: "dd/mm/yy",
            dateOrder: "ddmmy",
            dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
            dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
            dayText: "Ďeň",
            hourText: "Hodiny",
            minuteText: "Minúty",
            monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            monthText: "Mesiac",
            secText: "Sekundy",
            timeFormat: "hh:ii A",
            timeWheels: "hhiiA",
            yearText: "Rok",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            dateText: "Datum",
            timeText: "Čas",
            calendarText: "Kalendár",
            closeText: "Zavrieť",
            fromText: "Začiatok",
            toText: "Koniec",
            wholeText: "Celý",
            fractionText: "Časť",
            unitText: "Jednotka",
            labels: ["Roky", "Mesiace", "Dni", "Hodiny", "Minúty", "Sekundy", ""],
            labelsShort: ["Rok", "Mes", "Dni", "Hod", "Min", "Sec", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Resetovať",
            lapText: "Etapa",
            hideText: "Schovať"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.sv = a.extend(a.mobiscroll.i18n.sv, {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Klara",
            selectedText: "Vald",
            dateFormat: "yy-mm-dd",
            dateOrder: "yymmdd",
            dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            dayText: "Dag",
            hourText: "Timme",
            minuteText: "Minut",
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            monthText: "Månad",
            secText: "Sekund",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "År",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            dateText: "Datum",
            timeText: "Tid",
            calendarText: "Kalender",
            closeText: "Stäng",
            fromText: "Start",
            toText: "Slut",
            wholeText: "Hela",
            fractionText: "Bråk",
            unitText: "Enhet",
            labels: ["År", "Månader", "Dagar", "Timmar", "Minuter", "Sekunder", ""],
            labelsShort: ["År", "Mån", "Dag", "Tim", "Min", "Sek", ""],
            startText: "Start",
            stopText: "Stopp",
            resetText: "Återställ",
            lapText: "Varv",
            hideText: "Dölj"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.tr = a.extend(a.mobiscroll.i18n.tr, {
            setText: "Seç",
            cancelText: "İptal",
            clearText: "Temizleyin",
            selectedText: "Seçilmiş",
            dateFormat: "dd.mm.yy",
            dateOrder: "ddmmyy",
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
            dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
            dayText: "Gün",
            delimiter: ".",
            hourText: "Saat",
            minuteText: "Dakika",
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            monthText: "Ay",
            secText: "Saniye",
            timeFormat: "hh:ii A",
            timeWheels: "hhiiA",
            yearText: "Yıl",
            nowText: "Şimdi",
            pmText: "akşam",
            amText: "sabah",
            dateText: "Tarih",
            timeText: "Zaman",
            calendarText: "Takvim",
            closeText: "Kapatmak",
            fromText: "Başla",
            toText: "Son",
            wholeText: "Tam",
            fractionText: "Kesir",
            unitText: "Birim",
            labels: ["Yıl", "Ay", "Gün", "Saat", "Dakika", "Saniye", ""],
            labelsShort: ["Yıl", "Ay", "Gün", "Sa", "Dak", "Sn", ""],
            startText: "Başla",
            stopText: "Durdur",
            resetText: "Sıfırla",
            lapText: "Tur",
            hideText: "Gizle"
        })
    } (jQuery),
    function(a) {
        a.mobiscroll.i18n.zh = a.extend(a.mobiscroll.i18n.zh, {
            setText: "确定",
            cancelText: "取消",
            clearText: "明确",
            selectedText: "选",
            dateFormat: "yy/mm/dd",
            dateOrder: "yymmdd",
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            dayText: "日",
            hourText: "时",
            minuteText: "分",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            monthText: "月",
            secText: "秒",
            timeFormat: "HH:ii",
            timeWheels: "HHii",
            yearText: "年",
            nowText: "当前",
            pmText: "下午",
            amText: "上午",
            dateText: "日",
            timeText: "时间",
            calendarText: "日历",
            closeText: "关闭",
            fromText: "开始时间",
            toText: "结束时间",
            wholeText: "合计",
            fractionText: "分数",
            unitText: "单位",
            labels: ["年", "月", "日", "小时", "分钟", "秒", ""],
            labelsShort: ["年", "月", "日", "点", "分", "秒", ""],
            startText: "开始",
            stopText: "停止",
            resetText: "重置",
            lapText: "圈",
            hideText: "隐藏"
        })
    } (jQuery),
    function(a, b, c, d) {
        var e, f, g = a.extend,
            h = a.mobiscroll,
            i = h.instances,
            j = h.userdef,
            k = h.util,
            l = k.jsPrefix,
            m = k.has3d,
            n = k.getCoord,
            o = k.constrain,
            p = /android [1-3]/i.test(navigator.userAgent),
            q = "webkitAnimationEnd animationend",
            r = function() {},
            s = function(a) {
                a.preventDefault()
            };
        h.classes.Widget = function(k, t, u) {
            function v(b) {
                L && L.removeClass("dwb-a"),
                    L = a(this),
                L.hasClass("dwb-d") || L.hasClass("dwb-nhl") || L.addClass("dwb-a"),
                "mousedown" === b.type && a(c).on("mouseup", w)
            }
            function w(b) {
                L && (L.removeClass("dwb-a"), L = null),
                "mouseup" === b.type && a(c).off("mouseup", w)
            }
            function x(a) {
                a || H.focus(),
                    ab.ariaMessage(V.ariaMessage)
            }
            function y(b) {
                var c, g, j, k = V.focusOnClose;
                E.remove(),
                e && !b && setTimeout(function() {
                        if (k === d) {
                            f = !0,
                                c = e[0],
                                j = c.type,
                                g = c.value;
                            try {
                                c.type = "button"
                            } catch(b) {}
                            e.focus(),
                                c.type = j,
                                c.value = g
                        } else k && (i[a(k).attr("id")] && (h.tapped = !1), a(k).focus())
                    },
                    200),
                    ab._isVisible = !1,
                    A("onHide", [])
            }
            function z(a) {
                clearTimeout(db[a.type]),
                    db[a.type] = setTimeout(function() {
                            var b = "scroll" == a.type; (!b || W) && ab.position(!b)
                        },
                        200)
            }
            function A(b, c) {
                var d;
                return c.push(ab),
                    a.each([j, Y, T, t],
                        function(a, e) {
                            e && e[b] && (d = e[b].apply(k, c))
                        }),
                    d
            }
            var B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab = this,
                bb = a(k),
                cb = [],
                db = {};
            ab.position = function(b) {
                var e, f, g, h, i, j, k, l, m, n, p, q, r, s, t, u, v = 0,
                    w = 0,
                    x = {},
                    y = Math.min(I[0].innerWidth || I.innerWidth(), G.width()),
                    z = I[0].innerHeight || I.innerHeight();
                $ === y && _ === z && b || U || (O && ab._isLiquid && "bubble" !== V.display && H.width(y), A("onPosition", [E, y, z]) !== !1 && O && (t = I.scrollLeft(), u = I.scrollTop(), h = V.anchor === d ? bb: a(V.anchor), ab._isLiquid && "liquid" !== V.layout && (400 > y ? E.addClass("dw-liq") : E.removeClass("dw-liq")), /modal|bubble/.test(V.display) && (J.width(""), a(".mbsc-w-p", E).each(function() {
                    e = a(this).outerWidth(!0),
                        v += e,
                        w = e > w ? e: w
                }), e = v > y ? w: v, J.width(e).css("white-space", v > y ? "": "nowrap")), Q = H.outerWidth(), R = H.outerHeight(!0), W = z >= R && y >= Q, ab.scrollLock = W, "modal" == V.display ? (f = Math.max(0, t + (y - Q) / 2), g = u + (z - R) / 2) : "bubble" == V.display ? (s = !0, n = a(".dw-arrw-i", E), k = h.offset(), l = Math.abs(C.offset().top - k.top), m = Math.abs(C.offset().left - k.left), i = h.outerWidth(), j = h.outerHeight(), f = o(m - (H.outerWidth(!0) - i) / 2, t + 3, t + y - Q - 3), g = l - R, u > g || l > u + z ? (H.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), g = l + j) : H.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), p = n.outerWidth(), q = o(m + i / 2 - (f + (Q - p) / 2), 0, p), a(".dw-arr", E).css({
                    left: q
                })) : (f = t, "top" == V.display ? g = u: "bottom" == V.display && (g = u + z - R)), g = 0 > g ? 0 : g, x.top = g, x.left = f, H.css(x), G.height(0), r = Math.max(g + R, "body" == V.context ? a(c).height() : C[0].scrollHeight), G.css({
                    height: r
                }), s && (g + R > u + z || l > u + z) && (U = !0, setTimeout(function() {
                        U = !1
                    },
                    300), I.scrollTop(Math.min(g + R - z, r - z))), $ = y, _ = z))
            },
                ab.attachShow = function(b, d) {
                    cb.push(b),
                    "inline" !== V.display && b.on("mousedown.dw",
                        function(a) {
                            X && a.preventDefault()
                        }).on((V.showOnFocus ? "focus.dw": "") + (V.showOnTap ? " click.dw": ""),
                        function(g) {
                            "focus" === g.type && ("focus" !== g.type || f) || h.tapped || (d && d(), a(c.activeElement).is("input,textarea") && a(c.activeElement).blur(), e = b, ab.show()),
                                setTimeout(function() {
                                        f = !1
                                    },
                                    300)
                        })
                },
                ab.select = function() {
                    O && ab.hide(!1, "set") === !1 || (ab._fillValue(), A("onSelect", [ab.val]))
                },
                ab.cancel = function() {
                    O && ab.hide(!1, "cancel") === !1 || A("onCancel", [ab.val])
                },
                ab.clear = function() {
                    A("onClear", [E]),
                    O && !ab.live && ab.hide(!1, "clear"),
                        ab.setValue(null, !0)
                },
                ab.enable = function() {
                    V.disabled = !1,
                    ab._isInput && bb.prop("disabled", !1)
                },
                ab.disable = function() {
                    V.disabled = !0,
                    ab._isInput && bb.prop("disabled", !0)
                },
                ab.show = function(c, d) {
                    var e;
                    V.disabled || ab._isVisible || (M !== !1 && ("top" == V.display && (M = "slidedown"), "bottom" == V.display && (M = "slideup")), ab._readValue(), A("onBeforeShow", []), e = '<div lang="' + V.lang + '" class="mbsc-' + V.theme + " dw-" + V.display + " " + (V.cssClass || "") + (ab._isLiquid ? " dw-liq": "") + (p ? " mbsc-old": "") + (N ? "": " dw-nobtn") + '"><div class="dw-persp">' + (O ? '<div class="dwo"></div>': "") + "<div" + (O ? ' role="dialog" tabindex="-1"': "") + ' class="dw' + (V.rtl ? " dw-rtl": " dw-ltr") + '">' + ("bubble" === V.display ? '<div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div>': "") + '<div class="dwwr"><div aria-live="assertive" class="dw-aria dw-hidden"></div>' + (V.headerText ? '<div class="dwv">' + V.headerText + "</div>": "") + '<div class="dwcc">', e += ab._generateContent(), e += "</div>", N && (e += '<div class="dwbc">', a.each(K,
                        function(a, b) {
                            b = "string" == typeof b ? ab.buttons[b] : b,
                                e += "<div" + (V.btnWidth ? ' style="width:' + 100 / K.length + '%"': "") + ' class="dwbw ' + b.css + '"><div tabindex="0" role="button" class="dwb dwb' + a + ' dwb-e">' + b.text + "</div></div>"
                        }), e += "</div>"), e += "</div></div></div></div>", E = a(e), G = a(".dw-persp", E), F = a(".dwo", E), J = a(".dwwr", E), D = a(".dwv", E), H = a(".dw", E), B = a(".dw-aria", E), ab._markup = E, ab._header = D, ab._isVisible = !0, S = "orientationchange resize", ab._markupReady(), A("onMarkupReady", [E]), O ? (a(b).on("keydown.dw",
                        function(a) {
                            13 == a.keyCode ? ab.select() : 27 == a.keyCode && ab.cancel()
                        }), V.scrollLock && E.on("touchstart touchmove",
                        function(a) {
                            W && a.preventDefault()
                        }), "Moz" !== l && a("input,select,button", C).each(function() {
                        this.disabled || a(this).addClass("dwtd").prop("disabled", !0)
                    }), S += " scroll", h.activeInstance = ab, E.appendTo(C), m && M && !c && E.addClass("dw-in dw-trans").on(q,
                        function() {
                            E.removeClass("dw-in dw-trans").find(".dw").removeClass("dw-" + M),
                                x(d)
                        }).find(".dw").addClass("dw-" + M)) : bb.is("div") ? bb.html(E) : E.insertAfter(bb), A("onMarkupInserted", [E]), ab.position(), I.on(S, z), E.on("selectstart mousedown", s).on("click", ".dwb-e", s).on("keydown", ".dwb-e",
                        function(b) {
                            32 == b.keyCode && (b.preventDefault(), b.stopPropagation(), a(this).click())
                        }), setTimeout(function() {
                            a.each(K,
                                function(b, c) {
                                    ab.tap(a(".dwb" + b, E),
                                        function(a) {
                                            c = "string" == typeof c ? ab.buttons[c] : c,
                                                c.handler.call(this, a, ab)
                                        },
                                        !0)
                                }),
                            V.closeOnOverlay && ab.tap(F,
                                function() {
                                    ab.cancel()
                                }),
                            O && !M && x(d),
                                E.on("touchstart mousedown", ".dwb-e", v).on("touchend", ".dwb-e", w),
                                ab._attachEvents(E)
                        },
                        300), A("onShow", [E, ab._valueText]))
                },
                ab.hide = function(b, c, d) {
                    return ! ab._isVisible || !d && !ab._isValid && "set" == c || !d && A("onClose", [ab._valueText, c]) === !1 ? !1 : (E && ("Moz" !== l && a(".dwtd", C).each(function() {
                        a(this).prop("disabled", !1).removeClass("dwtd")
                    }), m && O && M && !b && !E.hasClass("dw-trans") ? E.addClass("dw-out dw-trans").find(".dw").addClass("dw-" + M).on(q,
                        function() {
                            y(b)
                        }) : y(b), I.off(S, z)), void delete h.activeInstance)
                },
                ab.ariaMessage = function(a) {
                    B.html(""),
                        setTimeout(function() {
                                B.html(a)
                            },
                            100)
                },
                ab.isVisible = function() {
                    return ab._isVisible
                },
                ab.setValue = r,
                ab._generateContent = r,
                ab._attachEvents = r,
                ab._readValue = r,
                ab._fillValue = r,
                ab._markupReady = r,
                ab._processSettings = r,
                ab.tap = function(a, b, c) {
                    var d, e, f;
                    V.tap && a.on("touchstart.dw",
                        function(a) {
                            c && a.preventDefault(),
                                d = n(a, "X"),
                                e = n(a, "Y"),
                                f = !1
                        }).on("touchmove.dw",
                        function(a) { (Math.abs(n(a, "X") - d) > 20 || Math.abs(n(a, "Y") - e) > 20) && (f = !0)
                        }).on("touchend.dw",
                        function(a) {
                            var c = this;
                            f || (a.preventDefault(), setTimeout(function() {
                                    b.call(c, a)
                                },
                                p ? 400 : 10)),
                                h.tapped = !0,
                                setTimeout(function() {
                                        h.tapped = !1
                                    },
                                    500)
                        }),
                        a.on("click.dw",
                            function(a) {
                                h.tapped || b.call(this, a),
                                    a.preventDefault()
                            })
                },
                ab.option = function(a, b) {
                    var c = {};
                    "object" == typeof a ? c = a: c[a] = b,
                        ab.init(c)
                },
                ab.destroy = function() {
                    ab.hide(!0, !1, !0),
                        a.each(cb,
                            function(a, b) {
                                b.off(".dw")
                            }),
                    ab._isInput && X && (k.readOnly = Z),
                        A("onDestroy", []),
                        delete i[k.id]
                },
                ab.getInst = function() {
                    return ab
                },
                ab.trigger = A,
                ab.init = function(c) {
                    ab.settings = V = {},
                        g(t, c),
                        g(V, h.defaults, ab._defaults, j, t),
                        Y = h.themes[V.theme] || h.themes.mobiscroll,
                        P = h.i18n[V.lang],
                        A("onThemeLoad", [P, t]),
                        g(V, Y, P, j, t),
                        T = h.presets[ab._class][V.preset],
                        V.buttons = V.buttons || ("inline" !== V.display ? ["set", "cancel"] : []),
                        V.headerText = V.headerText === d ? "inline" !== V.display ? "{value}": !1 : V.headerText,
                    T && (T = T.call(k, ab), g(V, T, t)),
                    h.themes[V.theme] || (V.theme = "mobiscroll"),
                        ab._isLiquid = "liquid" === (V.layout || (/top|bottom/.test(V.display) ? "liquid": "")),
                        ab._processSettings(),
                        bb.off(".dw"),
                        M = p ? !1 : V.animate,
                        K = V.buttons,
                        O = "inline" !== V.display,
                        X = V.showOnFocus || V.showOnTap,
                        I = a("body" == V.context ? b: V.context),
                        C = a(V.context),
                    V.setText || K.splice(a.inArray("set", K), 1),
                    V.cancelText || K.splice(a.inArray("cancel", K), 1),
                    V.button3 && K.splice(a.inArray("set", K) + 1, 0, {
                        text: V.button3Text,
                        handler: V.button3
                    }),
                        ab.context = I,
                        ab.live = -1 == a.inArray("set", K),
                        ab.buttons.set = {
                            text: V.setText,
                            css: "dwb-s",
                            handler: ab.select
                        },
                        ab.buttons.cancel = {
                            text: ab.live ? V.closeText: V.cancelText,
                            css: "dwb-c",
                            handler: ab.cancel
                        },
                        ab.buttons.clear = {
                            text: V.clearText,
                            css: "dwb-cl",
                            handler: ab.clear
                        },
                        ab._isInput = bb.is("input"),
                        N = K.length > 0,
                    ab._isVisible && ab.hide(!0, !1, !0),
                        O ? (ab._readValue(), ab._isInput && X && (Z === d && (Z = k.readOnly), k.readOnly = !0), ab.attachShow(bb)) : ab.show(),
                    ab._isInput && bb.on("change.dw",
                        function() {
                            ab._preventChange || ab.setValue(bb.val(), !1),
                                ab._preventChange = !1
                        })
                },
                ab.val = null,
                ab.buttons = {},
                ab._isValid = !0,
            u || (i[k.id] = ab, ab.init(t))
        },
            h.classes.Widget.prototype._defaults = {
                lang: "en",
                setText: "Set",
                selectedText: "Selected",
                closeText: "Close",
                cancelText: "Cancel",
                clearText: "Clear",
                disabled: !1,
                closeOnOverlay: !0,
                showOnFocus: !0,
                showOnTap: !0,
                display: "modal",
                scrollLock: !0,
                tap: !0,
                btnWidth: !0,
                focusOnClose: !1
            },
            h.themes.mobiscroll = {
                rows: 5,
                showLabel: !1,
                headerText: !1,
                btnWidth: !1,
                selectedLineHeight: !0,
                selectedLineBorder: 1,
                dateOrder: "MMddyy",
                weekDays: "min",
                checkIcon: "ion-ios7-checkmark-empty",
                btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
                btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
                btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
                btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
            },
            a(b).on("focus",
                function() {
                    e && (f = !0)
                }),
            a(c).on("mouseover mouseup mousedown click",
                function(a) {
                    return h.tapped ? (a.stopPropagation(), a.preventDefault(), !1) : void 0
                })
    } (jQuery, window, document),
    function(a) {
        a.mobiscroll.themes.android = {
            dateOrder: "Mddyy",
            mode: "clickpick",
            height: 50,
            showLabel: !1,
            btnStartClass: "mbsc-ic mbsc-ic-play3",
            btnStopClass: "mbsc-ic mbsc-ic-pause2",
            btnResetClass: "mbsc-ic mbsc-ic-stop2",
            btnLapClass: "mbsc-ic mbsc-ic-loop2"
        }
    } (jQuery),
    function(a) {
        var b = a.mobiscroll.themes,
            c = {
                dateOrder: "Mddyy",
                rows: 5,
                minWidth: 76,
                height: 36,
                showLabel: !1,
                selectedLineHeight: !0,
                selectedLineBorder: 2,
                useShortLabels: !0,
                icon: {
                    filled: "star3",
                    empty: "star"
                },
                btnPlusClass: "mbsc-ic mbsc-ic-arrow-down6",
                btnMinusClass: "mbsc-ic mbsc-ic-arrow-up6",
                onThemeLoad: function(a, b) {
                    b.theme && (b.theme = b.theme.replace("android-ics", "android-holo").replace(" light", "-light"))
                },
                onMarkupReady: function(a) {
                    a.addClass("mbsc-android-holo")
                }
            };
        b["android-holo"] = c,
            b["android-holo-light"] = c,
            b["android-ics"] = c,
            b["android-ics light"] = c,
            b["android-holo light"] = c
    } (jQuery),
    function(a) {
        a.mobiscroll.themes.ios = {
            display: "bottom",
            dateOrder: "MMdyy",
            rows: 5,
            height: 30,
            minWidth: 60,
            headerText: !1,
            showLabel: !1,
            btnWidth: !1,
            selectedLineHeight: !0,
            selectedLineBorder: 2,
            useShortLabels: !0
        }
    } (jQuery),
    function(a) {
        a.mobiscroll.themes.ios7 = {
            display: "bottom",
            dateOrder: "MMdyy",
            rows: 5,
            height: 34,
            minWidth: 55,
            headerText: !1,
            showLabel: !1,
            btnWidth: !1,
            selectedLineHeight: !0,
            selectedLineBorder: 1,
            useShortLabels: !0,
            deleteIcon: "backspace3",
            checkIcon: "ion-ios7-checkmark-empty",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5"
        }
    } (jQuery),
    function(a) {
        var b = a.mobile && a.mobile.version.match(/1\.4/);
        a.mobiscroll.themes.jqm = {
            jqmBorder: "a",
            jqmBody: b ? "a": "c",
            jqmHeader: "b",
            jqmWheel: "d",
            jqmLine: "b",
            jqmClickPick: "c",
            jqmSet: "b",
            jqmCancel: "c",
            disabledClass: "ui-disabled",
            activeClass: "ui-btn-active",
            activeTabInnerClass: "ui-btn-active",
            btnCalPrevClass: "",
            btnCalNextClass: "",
            selectedLineHeight: !0,
            selectedLineBorder: 1,
            onThemeLoad: function(a, b) {
                var c = b.jqmBody || "c",
                    d = b.jqmEventText || "b",
                    e = b.jqmEventBubble || "a";
                b.dayClass = "ui-body-a ui-body-" + c,
                    b.innerDayClass = "ui-state-default ui-btn ui-btn-up-" + c,
                    b.calendarClass = "ui-body-a ui-body-" + c,
                    b.weekNrClass = "ui-body-a ui-body-" + c,
                    b.eventTextClass = "ui-btn-up-" + d,
                    b.eventBubbleClass = "ui-body-" + e
            },
            onEventBubbleShow: function(b, c) {
                a(".dw-cal-event-list", c).attr("data-role", "listview"),
                    c.page().trigger("create")
            },
            onMarkupInserted: function(c, d) {
                var e = d.settings;
                b && (c.addClass("mbsc-jqm14"), a(".mbsc-np-btn, .dwwb, .dw-cal-sc-m-cell .dw-i", c).addClass("ui-btn"), a(".dwbc div.dwb, .dw-dr", c).addClass("ui-btn ui-mini ui-corner-all"), a(".dw-cal-prev .dw-cal-btn-txt", c).addClass("ui-btn ui-icon-arrow-l ui-btn-icon-notext ui-shadow ui-corner-all"), a(".dw-cal-next .dw-cal-btn-txt", c).addClass("ui-btn ui-icon-arrow-r ui-btn-icon-notext ui-shadow ui-corner-all")),
                    a(".dw", c).removeClass("dwbg").addClass("ui-selectmenu ui-overlay-shadow ui-corner-all ui-body-" + e.jqmBorder),
                    a(".dwbc .dwb", c).attr("data-role", "button").attr("data-mini", "true").attr("data-theme", e.jqmCancel),
                    a(".dwb-s .dwb", c).addClass("ui-btn-" + e.jqmSet).attr("data-theme", e.jqmSet),
                    a(".dwwb", c).attr("data-role", "button").attr("data-theme", e.jqmClickPick),
                    a(".dwv", c).addClass("ui-header ui-bar-" + e.jqmHeader),
                    a(".dwwr", c).addClass("ui-corner-all ui-body-" + e.jqmBody),
                    a(".dwwl", c).addClass("ui-body-" + e.jqmWheel),
                    a(".dwwol", c).addClass("ui-body-" + e.jqmLine),
                    a(".dwl", c).addClass("ui-body-" + e.jqmBody),
                    a(".dw-cal-tabs", c).attr("data-role", "navbar"),
                    a(".dw-cal-prev .dw-cal-btn-txt", c).attr("data-role", "button").attr("data-icon", "arrow-l").attr("data-iconpos", "notext"),
                    a(".dw-cal-next .dw-cal-btn-txt", c).attr("data-role", "button").attr("data-icon", "arrow-r").attr("data-iconpos", "notext"),
                    a(".dw-cal-events", c).attr("data-role", "page"),
                    a(".dw-dr", c).attr("data-role", "button").attr("data-mini", "true"),
                    a(".mbsc-np-btn", c).attr("data-role", "button").attr("data-corners", "false"),
                    c.trigger("create")
            }
        }
    } (jQuery),
    function(a) {
        a.mobiscroll.themes["sense-ui"] = {
            btnStartClass: "mbsc-ic mbsc-ic-play3",
            btnStopClass: "mbsc-ic mbsc-ic-pause2",
            btnResetClass: "mbsc-ic mbsc-ic-stop2",
            btnLapClass: "mbsc-ic mbsc-ic-loop2"
        }
    } (jQuery),
    function(a) {
        var b = a.mobiscroll.themes,
            c = {
                minWidth: 76,
                height: 76,
                accent: "none",
                dateOrder: "mmMMddDDyy",
                headerText: !1,
                showLabel: !1,
                deleteIcon: "backspace4",
                icon: {
                    filled: "star3",
                    empty: "star"
                },
                btnWidth: !1,
                btnStartClass: "mbsc-ic mbsc-ic-play3",
                btnStopClass: "mbsc-ic mbsc-ic-pause2",
                btnResetClass: "mbsc-ic mbsc-ic-stop2",
                btnLapClass: "mbsc-ic mbsc-ic-loop2",
                btnHideClass: "mbsc-ic mbsc-ic-close",
                btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2",
                btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2",
                btnPlusClass: "mbsc-ic mbsc-ic-plus",
                btnMinusClass: "mbsc-ic mbsc-ic-minus",
                onMarkupInserted: function(b, c) {
                    var d, e, f;
                    b.addClass("mbsc-wp"),
                        a(".dw", b).addClass("mbsc-wp-" + c.settings.accent),
                        a(".dwb-s .dwb", b).addClass("mbsc-ic mbsc-ic-checkmark"),
                        a(".dwb-c .dwb", b).addClass("mbsc-ic mbsc-ic-close"),
                        a(".dwb-cl .dwb", b).addClass("mbsc-ic mbsc-ic-close"),
                        a(".dwb-n .dwb", b).addClass("mbsc-ic mbsc-ic-loop2"),
                        a(".dwwl", b).on("touchstart mousedown DOMMouseScroll mousewheel",
                            function(c) {
                                "mousedown" === c.type && e || (e = "touchstart" === c.type, d = !0, f = a(this).hasClass("wpa"), a(".dwwl", b).removeClass("wpa"), a(this).addClass("wpa"))
                            }).on("touchmove mousemove",
                            function() {
                                d = !1
                            }).on("touchend mouseup",
                            function(b) {
                                d && f && a(b.target).closest(".dw-li").hasClass("dw-sel") && a(this).removeClass("wpa"),
                                "mouseup" === b.type && (e = !1),
                                    d = !1
                            })
                },
                onThemeLoad: function(a, b) {
                    if (a && a.dateOrder && !b.dateOrder) {
                        var c = a.dateOrder;
                        c = c.match(/mm/i) ? c.replace(/mmMM|mm|MM/, "mmMM") : c.replace(/mM|m|M/, "mM"),
                            c = c.match(/dd/i) ? c.replace(/ddDD|dd|DD/, "ddDD") : c.replace(/dD|d|D/, "dD"),
                            b.dateOrder = c
                    }
                    b.theme && (b.theme = b.theme.replace(" light", "-light"))
                }
            };
        b.wp = c,
            b["wp-light"] = c,
            b["wp light"] = c
    } (jQuery),
    function(a, b, c, d) {
        function e(b) {
            var c = {
                values: [],
                keys: []
            };
            return a.each(b,
                function(a, b) {
                    c.keys.push(a),
                        c.values.push(b)
                }),
                c
        }
        var f, g = a.mobiscroll,
            h = g.classes,
            i = g.instances,
            j = g.util,
            k = j.jsPrefix,
            l = j.has3d,
            m = j.hasFlex,
            n = j.getCoord,
            o = j.constrain,
            p = j.testTouch;
        h.Scroller = function(g, j, q) {
            function r(b) { ! p(b) || f || U || O || A(this) || (b.preventDefault(), b.stopPropagation(), f = !0, P = "clickpick" != R.mode, ab = a(".dw-ul", this), C(ab), V = gb[bb] !== d, Z = V ? E(ab) : hb[bb], W = n(b, "Y"), X = new Date, Y = W, G(ab, bb, Z, .001), P && ab.closest(".dwwl").addClass("dwa"), "mousedown" === b.type && a(c).on("mousemove", s).on("mouseup", t))
            }
            function s(a) {
                f && P && (a.preventDefault(), a.stopPropagation(), Y = n(a, "Y"), (Math.abs(Y - W) > 3 || V) && (G(ab, bb, o(Z + (W - Y) / Q, $ - 1, _ + 1)), V = !0))
            }
            function t(b) {
                if (f) {
                    var d, e, g, h = new Date - X,
                        i = o(Z + (W - Y) / Q, $ - 1, _ + 1),
                        j = ab.offset().top;
                    if (b.stopPropagation(), l && 300 > h ? (d = (Y - W) / h, e = d * d / R.speedUnit, 0 > Y - W && (e = -e)) : e = Y - W, g = Math.round(Z - e / Q), !V) {
                        var k = Math.floor((Y - j) / Q),
                            m = a(a(".dw-li", ab)[k]),
                            n = m.hasClass("dw-v"),
                            p = P;
                        S("onValueTap", [m]) !== !1 && n ? g = k: p = !0,
                        p && n && (m.addClass("dw-hl"), setTimeout(function() {
                                m.removeClass("dw-hl")
                            },
                            100))
                    }
                    P && J(ab, g, 0, !0, Math.round(i)),
                    "mouseup" === b.type && a(c).off("mousemove", s).off("mouseup", t),
                        f = !1
                }
            }
            function u(b) {
                O = a(this),
                O.hasClass("dwwb") && p(b) && z(b, O.closest(".dwwl"), O.hasClass("dwwbp") ? K: L),
                "mousedown" === b.type && a(c).on("mouseup", v)
            }
            function v(b) {
                O = null,
                U && (clearInterval(db), U = !1),
                "mouseup" === b.type && a(c).off("mouseup", v)
            }
            function w(b) {
                38 == b.keyCode ? z(b, a(this), L) : 40 == b.keyCode && z(b, a(this), K)
            }
            function x() {
                U && (clearInterval(db), U = !1)
            }
            function y(b) {
                if (!A(this)) {
                    b.preventDefault(),
                        b = b.originalEvent || b;
                    var c = b.wheelDelta ? b.wheelDelta / 120 : b.detail ? -b.detail / 3 : 0,
                        d = a(".dw-ul", this);
                    C(d),
                        J(d, Math.round(hb[bb] - c), 0 > c ? 1 : 2)
                }
            }
            function z(a, b, c) {
                if (a.stopPropagation(), a.preventDefault(), !U && !A(b) && !b.hasClass("dwa")) {
                    U = !0;
                    var d = b.find(".dw-ul");
                    C(d),
                        clearInterval(db),
                        db = setInterval(function() {
                                c(d)
                            },
                            R.delay),
                        c(d)
                }
            }
            function A(b) {
                if (a.isArray(R.readonly)) {
                    var c = a(".dwwl", N).index(b);
                    return R.readonly[c]
                }
                return R.readonly
            }
            function B(b) {
                var c = '<div class="dw-bf">',
                    d = jb[b],
                    f = d.values ? d: e(d),
                    g = 1,
                    h = f.labels || [],
                    i = f.values,
                    j = f.keys || i;
                return a.each(i,
                    function(a, b) {
                        g % 20 === 0 && (c += '</div><div class="dw-bf">'),
                            c += '<div role="option" aria-selected="false" class="dw-li dw-v" data-val="' + j[a] + '"' + (h[a] ? ' aria-label="' + h[a] + '"': "") + ' style="height:' + Q + "px;line-height:" + Q + 'px;"><div class="dw-i"' + (cb > 1 ? ' style="line-height:' + Math.round(Q / cb) + "px;font-size:" + Math.round(Q / cb * .8) + 'px;"': "") + ">" + b + "</div></div>",
                            g++
                    }),
                    c += "</div>"
            }
            function C(b) {
                var c = b.closest(".dwwl").hasClass("dwwms");
                $ = a(".dw-li", b).index(a(c ? ".dw-li": ".dw-v", b).eq(0)),
                    _ = Math.max($, a(".dw-li", b).index(a(c ? ".dw-li": ".dw-v", b).eq( - 1)) - (c ? R.rows - 1 : 0)),
                    bb = a(".dw-ul", N).index(b)
            }
            function D(a) {
                var b = R.headerText;
                return b ? "function" == typeof b ? b.call(g, a) : b.replace(/\{value\}/i, a) : ""
            }
            function E(c) {
                var e, f, g = b.getComputedStyle ? getComputedStyle(c[0]) : c[0].style;
                return l ? (a.each(["t", "webkitT", "MozT", "OT", "msT"],
                    function(a, b) {
                        return g[b + "ransform"] !== d ? (e = g[b + "ransform"], !1) : void 0
                    }), e = e.split(")")[0].split(", "), f = e[13] || e[5]) : f = g.top.replace("px", ""),
                    Math.round( - f / Q)
            }
            function F(a, b) {
                clearTimeout(gb[b]),
                    delete gb[b],
                    a.closest(".dwwl").removeClass("dwa")
            }
            function G(a, b, c, d, e) {
                var f = -c * Q,
                    g = a[0].style;
                f == ib[b] && gb[b] || (ib[b] = f, g[k + "Transition"] = "all " + (d ? d.toFixed(3) : 0) + "s ease-out", l ? g[k + "Transform"] = "translate3d(0," + f + "px,0)": g.top = f + "px", gb[b] && F(a, b), d && e && (a.closest(".dwwl").addClass("dwa"), gb[b] = setTimeout(function() {
                        F(a, b)
                    },
                    1e3 * d)), hb[b] = c)
            }
            function H(b, c, d, e) {
                var f = a('.dw-li[data-val="' + b + '"]', c),
                    g = a(".dw-li", c),
                    h = g.index(f),
                    i = g.length;
                if (e) C(c);
                else if (!f.hasClass("dw-v")) {
                    for (var j = f,
                             k = f,
                             l = 0,
                             m = 0; h - l >= 0 && !j.hasClass("dw-v");) l++,
                        j = g.eq(h - l);
                    for (; i > h + m && !k.hasClass("dw-v");) m++,
                        k = g.eq(h + m); (l > m && m && 2 !== d || !l || 0 > h - l || 1 == d) && k.hasClass("dw-v") ? (f = k, h += m) : (f = j, h -= l)
                }
                return {
                    cell: f,
                    v: e ? o(h, $, _) : h,
                    val: f.hasClass("dw-v") ? f.attr("data-val") : null
                }
            }
            function I(b, c, e, f, g) {
                S("validate", [N, c, b, f]) !== !1 && (a(".dw-ul", N).each(function(e) {
                    var h = a(this),
                        i = h.closest(".dwwl").hasClass("dwwms"),
                        j = e == c || c === d,
                        k = H(eb.temp[e], h, f, i),
                        l = k.cell; (!l.hasClass("dw-sel") || j) && (eb.temp[e] = k.val, i || (a(".dw-sel", h).removeAttr("aria-selected"), l.attr("aria-selected", "true")), a(".dw-sel", h).removeClass("dw-sel"), l.addClass("dw-sel"), G(h, e, k.v, j ? b: .1, j ? g: !1))
                }), eb._valueText = T = R.formatResult(eb.temp), eb.live && (eb._hasValue = e || eb._hasValue, M(e, e, 0, !0)), eb._header.html(D(T)), e && S("onChange", [T]), S("onValidated", []))
            }
            function J(b, c, e, f, g) {
                c = o(c, $, _);
                var h = a(".dw-li", b).eq(c),
                    i = g === d ? c: g,
                    j = g !== d,
                    k = bb,
                    l = Math.abs(c - i),
                    m = f ? c == i ? .1 : l * R.timeUnit * Math.max(.5, (100 - l) / 100) : 0;
                eb.temp[k] = h.attr("data-val"),
                    G(b, k, c, m, j),
                    setTimeout(function() {
                            I(m, k, !0, e, j)
                        },
                        10)
            }
            function K(a) {
                var b = hb[bb] + 1;
                J(a, b > _ ? $: b, 1, !0)
            }
            function L(a) {
                var b = hb[bb] - 1;
                J(a, $ > b ? _: b, 2, !0)
            }
            function M(a, b, c, d, e) {
                eb._isVisible && !d && I(c),
                    eb._valueText = T = R.formatResult(eb.temp),
                e || (eb.values = eb.temp.slice(0), eb.val = eb._hasValue ? T: null),
                a && (S("onValueFill", [eb._hasValue ? T: "", b]), eb._isInput && (fb.val(eb._hasValue ? T: ""), b && (eb._preventChange = !0, fb.change())))
            }
            var N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb = this,
                fb = a(g),
                gb = {},
                hb = {},
                ib = {},
                jb = [];
            h.Widget.call(this, g, j, !0),
                eb.setValue = function(b, c, e, f, h) {
                    eb._hasValue = null !== b && b !== d,
                        eb.temp = a.isArray(b) ? b.slice(0) : R.parseValue.call(g, b, eb),
                        M(c, h === d ? c: h, e, !1, f)
                },
                eb.getValue = function() {
                    return eb._hasValue ? eb.values: null
                },
                eb.getValues = function() {
                    var a, b = [];
                    for (a in eb._selectedValues) b.push(eb._selectedValues[a]);
                    return b
                },
                eb.changeWheel = function(b, c, e) {
                    if (N) {
                        var f = 0,
                            g = b.length;
                        a.each(R.wheels,
                            function(h, i) {
                                return a.each(i,
                                    function(h, i) {
                                        return a.inArray(f, b) > -1 && (jb[f] = i, a(".dw-ul", N).eq(f).html(B(f)), g--, !g) ? (eb.position(), I(c, d, e), !1) : void f++
                                    }),
                                    g ? void 0 : !1
                            })
                    }
                },
                eb.getValidCell = H,
                eb._generateContent = function() {
                    var b, c = "",
                        e = 0;
                    return a.each(R.wheels,
                        function(f, g) {
                            c += '<div class="mbsc-w-p dwc' + ("scroller" != R.mode ? " dwpm": " dwsc") + (R.showLabel ? "": " dwhl") + '"><div class="dwwc"' + (R.maxWidth ? "": ' style="max-width:600px;"') + ">" + (m ? "": '<table class="dw-tbl" cellpadding="0" cellspacing="0"><tr>'),
                                a.each(g,
                                    function(a, f) {
                                        jb[e] = f,
                                            b = f.label !== d ? f.label: a,
                                            c += "<" + (m ? "div": "td") + ' class="dwfl" style="' + (R.fixedWidth ? "width:" + (R.fixedWidth[e] || R.fixedWidth) + "px;": (R.minWidth ? "min-width:" + (R.minWidth[e] || R.minWidth) + "px;": "min-width:" + R.width + "px;") + (R.maxWidth ? "max-width:" + (R.maxWidth[e] || R.maxWidth) + "px;": "")) + '"><div class="dwwl dwwl' + e + (f.multiple ? " dwwms": "") + '">' + ("scroller" != R.mode ? '<div class="dwb-e dwwb dwwbp ' + (R.btnPlusClass || "") + '" style="height:' + Q + "px;line-height:" + Q + 'px;"><span>+</span></div><div class="dwb-e dwwb dwwbm ' + (R.btnMinusClass || "") + '" style="height:' + Q + "px;line-height:" + Q + 'px;"><span>&ndash;</span></div>': "") + '<div class="dwl">' + b + '</div><div tabindex="0" aria-live="off" aria-label="' + b + '" role="listbox" class="dwww"><div class="dww" style="height:' + R.rows * Q + 'px;"><div class="dw-ul" style="margin-top:' + (f.multiple ? 0 : R.rows / 2 * Q - Q / 2) + 'px;">',
                                            c += B(e) + '</div></div><div class="dwwo"></div></div><div class="dwwol"' + (R.selectedLineHeight ? ' style="height:' + Q + "px;margin-top:-" + (Q / 2 + (R.selectedLineBorder || 0)) + 'px;"': "") + "></div></div>" + (m ? "</div>": "</td>"),
                                            e++
                                    }),
                                c += (m ? "": "</tr></table>") + "</div></div>"
                        }),
                        c
                },
                eb._attachEvents = function(a) {
                    a.on("DOMMouseScroll mousewheel", ".dwwl", y).on("keydown", ".dwwl", w).on("keyup", ".dwwl", x).on("touchstart mousedown", ".dwwl", r).on("touchmove", ".dwwl", s).on("touchend", ".dwwl", t).on("touchstart mousedown", ".dwb-e", u).on("touchend", ".dwb-e", v)
                },
                eb._markupReady = function() {
                    N = eb._markup,
                        I()
                },
                eb._fillValue = function() {
                    eb._hasValue = !0,
                        M(!0, !0, 0, !0)
                },
                eb._readValue = function() {
                    var a = fb.val() || "";
                    eb._hasValue = "" !== a,
                        eb.temp = eb.values ? eb.values.slice(0) : R.parseValue(a, eb),
                        M()
                },
                eb._processSettings = function() {
                    R = eb.settings,
                        S = eb.trigger,
                        Q = R.height,
                        cb = R.multiline,
                        eb._isLiquid = "liquid" === (R.layout || (/top|bottom/.test(R.display) && 1 == R.wheels.length ? "liquid": "")),
                        eb.values = null,
                        eb.temp = null,
                    cb > 1 && (R.cssClass = (R.cssClass || "") + " dw-ml")
                },
                eb._selectedValues = {},
            q || (i[g.id] = eb, eb.init(j))
        },
            h.Scroller.prototype._class = "scroller",
            h.Scroller.prototype._defaults = a.extend({},
                h.Widget.prototype._defaults, {
                    minWidth: 80,
                    height: 40,
                    rows: 3,
                    multiline: 1,
                    delay: 300,
                    readonly: !1,
                    showLabel: !0,
                    wheels: [],
                    mode: "scroller",
                    preset: "",
                    speedUnit: .0012,
                    timeUnit: .08,
                    formatResult: function(a) {
                        return a.join(" ")
                    },
                    parseValue: function(b, c) {
                        var d, f = b.split(" "),
                            g = [],
                            h = 0;
                        return a.each(c.settings.wheels,
                            function(b, c) {
                                a.each(c,
                                    function(b, c) {
                                        c = c.values ? c: e(c),
                                            d = c.keys || c.values,
                                            g.push( - 1 !== a.inArray(f[h], d) ? f[h] : d[0]),
                                            h++
                                    })
                            }),
                            g
                    }
                })
    } (jQuery, window, document),
    function(a) {
        var b = a.mobiscroll;
        b.datetime = {
            defaults: {
                shortYearCutoff: "+10",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
                monthText: "Month",
                amText: "am",
                pmText: "pm",
                getYear: function(a) {
                    return a.getFullYear()
                },
                getMonth: function(a) {
                    return a.getMonth()
                },
                getDay: function(a) {
                    return a.getDate()
                },
                getDate: function(a, b, c, d, e, f) {
                    return new Date(a, b, c, d || 0, e || 0, f || 0)
                },
                getMaxDayOfMonth: function(a, b) {
                    return 32 - new Date(a, b, 32).getDate()
                },
                getWeekNumber: function(a) {
                    a = new Date(a),
                        a.setHours(0, 0, 0),
                        a.setDate(a.getDate() + 4 - (a.getDay() || 7));
                    var b = new Date(a.getFullYear(), 0, 1);
                    return Math.ceil(((a - b) / 864e5 + 1) / 7)
                }
            },
            formatDate: function(c, d, e) {
                if (!d) return null;
                var f, g, h = a.extend({},
                    b.datetime.defaults, e),
                    i = function(a) {
                        for (var b = 0; f + 1 < c.length && c.charAt(f + 1) == a;) b++,
                            f++;
                        return b
                    },
                    j = function(a, b, c) {
                        var d = "" + b;
                        if (i(a)) for (; d.length < c;) d = "0" + d;
                        return d
                    },
                    k = function(a, b, c, d) {
                        return i(a) ? d[b] : c[b]
                    },
                    l = "",
                    m = !1;
                for (f = 0; f < c.length; f++) if (m)"'" != c.charAt(f) || i("'") ? l += c.charAt(f) : m = !1;
                else switch (c.charAt(f)) {
                        case "d":
                            l += j("d", h.getDay(d), 2);
                            break;
                        case "D":
                            l += k("D", d.getDay(), h.dayNamesShort, h.dayNames);
                            break;
                        case "o":
                            l += j("o", (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 864e5, 3);
                            break;
                        case "m":
                            l += j("m", h.getMonth(d) + 1, 2);
                            break;
                        case "M":
                            l += k("M", h.getMonth(d), h.monthNamesShort, h.monthNames);
                            break;
                        case "y":
                            g = h.getYear(d),
                                l += i("y") ? g: (10 > g % 100 ? "0": "") + g % 100;
                            break;
                        case "h":
                            var n = d.getHours();
                            l += j("h", n > 12 ? n - 12 : 0 === n ? 12 : n, 2);
                            break;
                        case "H":
                            l += j("H", d.getHours(), 2);
                            break;
                        case "i":
                            l += j("i", d.getMinutes(), 2);
                            break;
                        case "s":
                            l += j("s", d.getSeconds(), 2);
                            break;
                        case "a":
                            l += d.getHours() > 11 ? h.pmText: h.amText;
                            break;
                        case "A":
                            l += d.getHours() > 11 ? h.pmText.toUpperCase() : h.amText.toUpperCase();
                            break;
                        case "'":
                            i("'") ? l += "'": m = !0;
                            break;
                        default:
                            l += c.charAt(f)
                    }
                return l
            },
            parseDate: function(c, d, e) {
                var f = a.extend({},
                    b.datetime.defaults, e),
                    g = f.defaultValue || new Date;
                if (!c || !d) return g;
                if (d.getTime) return d;
                d = "object" == typeof d ? d.toString() : d + "";
                var h, i = f.shortYearCutoff,
                    j = f.getYear(g),
                    k = f.getMonth(g) + 1,
                    l = f.getDay(g),
                    m = -1,
                    n = g.getHours(),
                    o = g.getMinutes(),
                    p = 0,
                    q = -1,
                    r = !1,
                    s = function(a) {
                        var b = h + 1 < c.length && c.charAt(h + 1) == a;
                        return b && h++,
                            b
                    },
                    t = function(a) {
                        s(a);
                        var b = "@" == a ? 14 : "!" == a ? 20 : "y" == a ? 4 : "o" == a ? 3 : 2,
                            c = new RegExp("^\\d{1," + b + "}"),
                            e = d.substr(w).match(c);
                        return e ? (w += e[0].length, parseInt(e[0], 10)) : 0
                    },
                    u = function(a, b, c) {
                        var e, f = s(a) ? c: b;
                        for (e = 0; e < f.length; e++) if (d.substr(w, f[e].length).toLowerCase() == f[e].toLowerCase()) return w += f[e].length,
                        e + 1;
                        return 0
                    },
                    v = function() {
                        w++
                    },
                    w = 0;
                for (h = 0; h < c.length; h++) if (r)"'" != c.charAt(h) || s("'") ? v() : r = !1;
                else switch (c.charAt(h)) {
                        case "d":
                            l = t("d");
                            break;
                        case "D":
                            u("D", f.dayNamesShort, f.dayNames);
                            break;
                        case "o":
                            m = t("o");
                            break;
                        case "m":
                            k = t("m");
                            break;
                        case "M":
                            k = u("M", f.monthNamesShort, f.monthNames);
                            break;
                        case "y":
                            j = t("y");
                            break;
                        case "H":
                            n = t("H");
                            break;
                        case "h":
                            n = t("h");
                            break;
                        case "i":
                            o = t("i");
                            break;
                        case "s":
                            p = t("s");
                            break;
                        case "a":
                            q = u("a", [f.amText, f.pmText], [f.amText, f.pmText]) - 1;
                            break;
                        case "A":
                            q = u("A", [f.amText, f.pmText], [f.amText, f.pmText]) - 1;
                            break;
                        case "'":
                            s("'") ? v() : r = !0;
                            break;
                        default:
                            v()
                    }
                if (100 > j && (j += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (j <= ("string" != typeof i ? i: (new Date).getFullYear() % 100 + parseInt(i, 10)) ? 0 : -100)), m > -1) for (k = 1, l = m;;) {
                    var x = 32 - new Date(j, k - 1, 32).getDate();
                    if (x >= l) break;
                    k++,
                        l -= x
                }
                n = -1 == q ? n: q && 12 > n ? n + 12 : q || 12 != n ? n: 0;
                var y = f.getDate(j, k - 1, l, n, o, p);
                return f.getYear(y) != j || f.getMonth(y) + 1 != k || f.getDay(y) != l ? g: y
            }
        },
            b.formatDate = b.datetime.formatDate,
            b.parseDate = b.datetime.parseDate
    } (jQuery),
    function(a, b) {
        var c = a.mobiscroll,
            d = c.datetime,
            e = new Date,
            f = {
                startYear: e.getFullYear() - 100,
                endYear: e.getFullYear() + 1,
                showNow: !1,
                stepHour: 1,
                stepMinute: 1,
                stepSecond: 1,
                separator: " ",
                dateFormat: "mm/dd/yy",
                dateOrder: "mmddy",
                timeWheels: "hhiiA",
                timeFormat: "hh:ii A",
                dayText: "Day",
                yearText: "Year",
                hourText: "Hours",
                minuteText: "Minutes",
                ampmText: "&nbsp;",
                secText: "Seconds",
                nowText: "Now"
            },
            g = function(e) {
                function g(a, c, d) {
                    return W[c] !== b ? +a[W[c]] : d !== b ? d: X[c](fb)
                }
                function h(a, b, c, d) {
                    a.push({
                        values: c,
                        keys: b,
                        label: d
                    })
                }
                function i(a, b, c, d) {
                    return Math.min(d, Math.floor(a / b) * b + c)
                }
                function j(a) {
                    return R.getYear(a)
                }
                function k(a) {
                    return R.getMonth(a)
                }
                function l(a) {
                    return R.getDay(a)
                }
                function m(a) {
                    var b = a.getHours();
                    return b = db && b >= 12 ? b - 12 : b,
                        i(b, gb, lb, ob)
                }
                function n(a) {
                    return i(a.getMinutes(), hb, mb, pb)
                }
                function o(a) {
                    return i(a.getSeconds(), ib, nb, qb)
                }
                function p(a) {
                    return cb && a.getHours() > 11 ? 1 : 0
                }
                function q(a) {
                    if (null === a) return a;
                    var b = g(a, "h", 0);
                    return R.getDate(g(a, "y"), g(a, "m"), g(a, "d"), g(a, "a", 0) ? b + 12 : b, g(a, "i", 0), g(a, "s", 0))
                }
                function r(a, b, c) {
                    return Math.floor((c - b) / a) * a + b
                }
                function s(a, b) {
                    var c, d, e = !1,
                        f = !1,
                        g = 0,
                        h = 0;
                    if (t(a)) return a;
                    if (jb > a && (a = jb), a > kb && (a = kb), c = a, d = a, 2 !== b) for (e = t(c); ! e && kb > c;) c = new Date(c.getTime() + 864e5),
                        e = t(c),
                        g++;
                    if (1 !== b) for (f = t(d); ! f && d > jb;) d = new Date(d.getTime() - 864e5),
                        f = t(d),
                        h++;
                    return 1 === b && e ? c: 2 === b && f ? d: g > h && f ? d: c
                }
                function t(a) {
                    return jb > a ? !1 : a > kb ? !1 : u(a, Z) ? !0 : u(a, Y) ? !1 : !0
                }
                function u(a, b) {
                    var c, d, e;
                    if (b) for (d = 0; d < b.length; d++) if (c = b[d], e = c + "", !c.start) if (c.getTime) {
                        if (a.getFullYear() == c.getFullYear() && a.getMonth() == c.getMonth() && a.getDate() == c.getDate()) return ! 0
                    } else if (e.match(/w/i)) {
                        if (e = +e.replace("w", ""), e == a.getDay()) return ! 0
                    } else if (e = e.split("/"), e[1]) {
                        if (e[0] - 1 == a.getMonth() && e[1] == a.getDate()) return ! 0
                    } else if (e[0] == a.getDate()) return ! 0;
                    return ! 1
                }
                function v(a, b, c, d, e, f, g) {
                    var h, i, j;
                    if (a) for (h = 0; h < a.length; h++) if (i = a[h], j = i + "", !i.start) if (i.getTime) R.getYear(i) == b && R.getMonth(i) == c && (f[R.getDay(i) - 1] = g);
                    else if (j.match(/w/i)) for (j = +j.replace("w", ""), H = j - d; e > H; H += 7) H >= 0 && (f[H] = g);
                    else j = j.split("/"),
                            j[1] ? j[0] - 1 == c && (f[j[1] - 1] = g) : f[j[0] - 1] = g
                }
                function w(c, d, e, f, g, h, j, k, l) {
                    var m, n, o, p, q, r, s, t, u, v, w, x, z, A, B, C, D, E, F = {},
                        G = {
                            h: gb,
                            i: hb,
                            s: ib,
                            a: 1
                        },
                        H = R.getDate(g, h, j),
                        I = ["a", "h", "i", "s"];
                    c && (a.each(c,
                        function(a, b) {
                            b.start && (b.apply = !1, m = b.d, n = m + "", o = n.split("/"), m && (m.getTime && g == R.getYear(m) && h == R.getMonth(m) && j == R.getDay(m) || !n.match(/w/i) && (o[1] && j == o[1] && h == o[0] - 1 || !o[1] && j == o[0]) || n.match(/w/i) && H.getDay() == +n.replace("w", "")) && (b.apply = !0, F[H] = !0))
                        }), a.each(c,
                        function(c, f) {
                            if (z = 0, A = 0, w = 0, x = b, r = !0, s = !0, B = !1, f.start && (f.apply || !f.d && !F[H])) {
                                for (p = f.start.split(":"), q = f.end.split(":"), v = 0; 3 > v; v++) p[v] === b && (p[v] = 0),
                                q[v] === b && (q[v] = 59),
                                    p[v] = +p[v],
                                    q[v] = +q[v];
                                for (p.unshift(p[0] > 11 ? 1 : 0), q.unshift(q[0] > 11 ? 1 : 0), db && (p[1] >= 12 && (p[1] = p[1] - 12), q[1] >= 12 && (q[1] = q[1] - 12)), v = 0; d > v; v++) T[v] !== b && (t = i(p[v], G[I[v]], O[I[v]], P[I[v]]), u = i(q[v], G[I[v]], O[I[v]], P[I[v]]), C = 0, D = 0, E = 0, db && 1 == v && (C = p[0] ? 12 : 0, D = q[0] ? 12 : 0, E = T[0] ? 12 : 0), r || (t = 0), s || (u = P[I[v]]), (r || s) && t + C < T[v] + E && T[v] + E < u + D && (B = !0), T[v] != t && (r = !1), T[v] != u && (s = !1));
                                if (!l) for (v = d + 1; 4 > v; v++) p[v] > 0 && (z = G[e]),
                                q[v] < P[I[v]] && (A = G[e]);
                                B || (t = i(p[d], G[e], O[e], P[e]) + z, u = i(q[d], G[e], O[e], P[e]) - A, r && (w = y(k, t, P[e], 0)), s && (x = y(k, u, P[e], 1))),
                                (r || s || B) && (l ? a(".dw-li", k).slice(w, x).addClass("dw-v") : a(".dw-li", k).slice(w, x).removeClass("dw-v"))
                            }
                        }))
                }
                function x(b, c) {
                    return a(".dw-li", b).index(a('.dw-li[data-val="' + c + '"]', b))
                }
                function y(b, c, d, e) {
                    return 0 > c ? 0 : c > d ? a(".dw-li", b).length: x(b, c) + e
                }
                function z(a) {
                    var c, d = [];
                    if (null === a || a === b) return a;
                    for (c in W) d[W[c]] = X[c](a);
                    return d
                }
                function A(a) {
                    var b, c, d, e = [];
                    if (a) {
                        for (b = 0; b < a.length; b++) if (c = a[b], c.start && c.start.getTime) for (d = new Date(c.start); d <= c.end;) e.push(new Date(d.getFullYear(), d.getMonth(), d.getDate())),
                            d.setDate(d.getDate() + 1);
                        else e.push(c);
                        return e
                    }
                    return a
                }
                var B, C = a(this),
                    D = {};
                if (C.is("input")) {
                    switch (C.attr("type")) {
                        case "date":
                            B = "yy-mm-dd";
                            break;
                        case "datetime":
                            B = "yy-mm-ddTHH:ii:ssZ";
                            break;
                        case "datetime-local":
                            B = "yy-mm-ddTHH:ii:ss";
                            break;
                        case "month":
                            B = "yy-mm",
                                D.dateOrder = "mmyy";
                            break;
                        case "time":
                            B = "HH:ii:ss"
                    }
                    var E = C.attr("min"),
                        F = C.attr("max");
                    E && (D.minDate = d.parseDate(B, E)),
                    F && (D.maxDate = d.parseDate(B, F))
                }
                var G, H, I, J, K, L, M, N, O, P, Q = a.extend({},
                    e.settings),
                    R = a.extend(e.settings, c.datetime.defaults, f, D, Q),
                    S = 0,
                    T = [],
                    U = [],
                    V = [],
                    W = {},
                    X = {
                        y: j,
                        m: k,
                        d: l,
                        h: m,
                        i: n,
                        s: o,
                        a: p
                    },
                    Y = R.invalid,
                    Z = R.valid,
                    $ = R.preset,
                    _ = R.dateOrder,
                    ab = R.timeWheels,
                    bb = _.match(/D/),
                    cb = ab.match(/a/i),
                    db = ab.match(/h/),
                    eb = "datetime" == $ ? R.dateFormat + R.separator + R.timeFormat: "time" == $ ? R.timeFormat: R.dateFormat,
                    fb = new Date,
                    gb = R.stepHour,
                    hb = R.stepMinute,
                    ib = R.stepSecond,
                    jb = R.minDate || new Date(R.startYear, 0, 1),
                    kb = R.maxDate || new Date(R.endYear, 11, 31, 23, 59, 59),
                    lb = jb.getHours() % gb,
                    mb = jb.getMinutes() % hb,
                    nb = jb.getSeconds() % ib,
                    ob = r(gb, lb, db ? 11 : 23),
                    pb = r(hb, mb, 59),
                    qb = r(hb, mb, 59);
                if (B = B || eb, $.match(/date/i)) {
                    for (a.each(["y", "m", "d"],
                        function(a, b) {
                            G = _.search(new RegExp(b, "i")),
                            G > -1 && V.push({
                                o: G,
                                v: b
                            })
                        }), V.sort(function(a, b) {
                        return a.o > b.o ? 1 : -1
                    }), a.each(V,
                        function(a, b) {
                            W[b.v] = a
                        }), K = [], H = 0; 3 > H; H++) if (H == W.y) {
                        for (S++, J = [], I = [], L = R.getYear(jb), M = R.getYear(kb), G = L; M >= G; G++) I.push(G),
                            J.push((_.match(/yy/i) ? G: (G + "").substr(2, 2)) + (R.yearSuffix || ""));
                        h(K, I, J, R.yearText)
                    } else if (H == W.m) {
                        for (S++, J = [], I = [], G = 0; 12 > G; G++) {
                            var rb = _.replace(/[dy]/gi, "").replace(/mm/, (9 > G ? "0" + (G + 1) : G + 1) + (R.monthSuffix || "")).replace(/m/, G + 1 + (R.monthSuffix || ""));
                            I.push(G),
                                J.push(rb.match(/MM/) ? rb.replace(/MM/, '<span class="dw-mon">' + R.monthNames[G] + "</span>") : rb.replace(/M/, '<span class="dw-mon">' + R.monthNamesShort[G] + "</span>"))
                        }
                        h(K, I, J, R.monthText)
                    } else if (H == W.d) {
                        for (S++, J = [], I = [], G = 1; 32 > G; G++) I.push(G),
                            J.push((_.match(/dd/i) && 10 > G ? "0" + G: G) + (R.daySuffix || ""));
                        h(K, I, J, R.dayText)
                    }
                    U.push(K)
                }
                if ($.match(/time/i)) {
                    for (N = !0, V = [], a.each(["h", "i", "s", "a"],
                        function(a, b) {
                            a = ab.search(new RegExp(b, "i")),
                            a > -1 && V.push({
                                o: a,
                                v: b
                            })
                        }), V.sort(function(a, b) {
                        return a.o > b.o ? 1 : -1
                    }), a.each(V,
                        function(a, b) {
                            W[b.v] = S + a
                        }), K = [], H = S; S + 4 > H; H++) if (H == W.h) {
                        for (S++, J = [], I = [], G = lb; (db ? 12 : 24) > G; G += gb) I.push(G),
                            J.push(db && 0 === G ? 12 : ab.match(/hh/i) && 10 > G ? "0" + G: G);
                        h(K, I, J, R.hourText)
                    } else if (H == W.i) {
                        for (S++, J = [], I = [], G = mb; 60 > G; G += hb) I.push(G),
                            J.push(ab.match(/ii/) && 10 > G ? "0" + G: G);
                        h(K, I, J, R.minuteText)
                    } else if (H == W.s) {
                        for (S++, J = [], I = [], G = nb; 60 > G; G += ib) I.push(G),
                            J.push(ab.match(/ss/) && 10 > G ? "0" + G: G);
                        h(K, I, J, R.secText)
                    } else if (H == W.a) {
                        S++;
                        var sb = ab.match(/A/);
                        h(K, [0, 1], sb ? [R.amText.toUpperCase(), R.pmText.toUpperCase()] : [R.amText, R.pmText], R.ampmText)
                    }
                    U.push(K)
                }
                return e.setDate = function(a, b, c, d, f) {
                    e.temp = z(a),
                        e.setValue(e.temp, b, c, d, f)
                },
                    e.getDate = function(a) {
                        return q(a ? e.temp: e.values)
                    },
                    e.convert = function(b) {
                        var c = b;
                        return a.isArray(b) || (c = [], a.each(b,
                            function(b, d) {
                                a.each(d,
                                    function(a, d) {
                                        "daysOfWeek" === b && (d.d ? d.d = "w" + d.d: d = "w" + d),
                                            c.push(d)
                                    })
                            })),
                            c
                    },
                    e.format = eb,
                    e.order = W,
                    e.buttons.now = {
                        text: R.nowText,
                        css: "dwb-n",
                        handler: function() {
                            e.setDate(new Date, !1, .3, !0, !0)
                        }
                    },
                R.showNow && R.buttons.splice(a.inArray("set", R.buttons) + 1, 0, "now"),
                    Y = Y ? e.convert(Y) : !1,
                    Y = A(Y),
                    Z = A(Z),
                    jb = q(z(jb)),
                    kb = q(z(kb)),
                    O = {
                        y: jb.getFullYear(),
                        m: 0,
                        d: 1,
                        h: lb,
                        i: mb,
                        s: nb,
                        a: 0
                    },
                    P = {
                        y: kb.getFullYear(),
                        m: 11,
                        d: 31,
                        h: ob,
                        i: pb,
                        s: qb,
                        a: 1
                    },
                {
                    wheels: U,
                    headerText: R.headerText ?
                        function() {
                            return d.formatDate(eb, q(e.temp), R)
                        }: !1,
                    formatResult: function(a) {
                        return d.formatDate(B, q(a), R)
                    },
                    parseValue: function(a) {
                        return z(a ? d.parseDate(B, a, R) : R.defaultValue || new Date)
                    },
                    validate: function(c, d, f, h) {
                        var i = s(q(e.temp), h),
                            j = z(i),
                            k = g(j, "y"),
                            l = g(j, "m"),
                            m = !0,
                            n = !0;
                        a.each(["y", "m", "d", "a", "h", "i", "s"],
                            function(d, e) {
                                if (W[e] !== b) {
                                    var f = O[e],
                                        h = P[e],
                                        i = 31,
                                        o = g(j, e),
                                        p = a(".dw-ul", c).eq(W[e]);
                                    if ("d" == e && (i = R.getMaxDayOfMonth(k, l), h = i, bb && a(".dw-li", p).each(function() {
                                            var b = a(this),
                                                c = b.data("val"),
                                                d = R.getDate(k, l, c).getDay(),
                                                e = _.replace(/[my]/gi, "").replace(/dd/, (10 > c ? "0" + c: c) + (R.daySuffix || "")).replace(/d/, c + (R.daySuffix || ""));
                                            a(".dw-i", b).html(e.match(/DD/) ? e.replace(/DD/, '<span class="dw-day">' + R.dayNames[d] + "</span>") : e.replace(/D/, '<span class="dw-day">' + R.dayNamesShort[d] + "</span>"))
                                        })), m && jb && (f = X[e](jb)), n && kb && (h = X[e](kb)), "y" != e) {
                                        var q = x(p, f),
                                            r = x(p, h);
                                        a(".dw-li", p).removeClass("dw-v").slice(q, r + 1).addClass("dw-v"),
                                        "d" == e && a(".dw-li", p).removeClass("dw-h").slice(i).addClass("dw-h")
                                    }
                                    if (f > o && (o = f), o > h && (o = h), m && (m = o == f), n && (n = o == h), "d" == e) {
                                        var s = R.getDate(k, l, 1).getDay(),
                                            t = {};
                                        v(Y, k, l, s, i, t, 1),
                                            v(Z, k, l, s, i, t, 0),
                                            a.each(t,
                                                function(b, c) {
                                                    c && a(".dw-li", p).eq(b).removeClass("dw-v")
                                                })
                                    }
                                }
                            }),
                        N && a.each(["a", "h", "i", "s"],
                            function(d, f) {
                                var i = g(j, f),
                                    m = g(j, "d"),
                                    n = a(".dw-ul", c).eq(W[f]);
                                W[f] !== b && (w(Y, d, f, j, k, l, m, n, 0), w(Z, d, f, j, k, l, m, n, 1), T[d] = +e.getValidCell(i, n, h).val)
                            }),
                            e.temp = j
                    }
                }
            };
        a.each(["date", "time", "datetime"],
            function(a, b) {
                c.presets.scroller[b] = g,
                    c.presetShort(b)
            })
    } (jQuery),
    function(a, b) {
        var c = a.mobiscroll,
            d = {
                invalid: [],
                showInput: !0,
                inputClass: ""
            },
            e = function(c) {
                function e(b, c, d, e) {
                    for (var g, h = 0; c > h;) {
                        var i = a(".dwwl" + h, b),
                            j = f(e, h, d);
                        for (g = 0; g < j.length; g++) a('.dw-li[data-val="' + j[g] + '"]', i).removeClass("dw-v");
                        h++
                    }
                }
                function f(a, b, c) {
                    for (var d, e = 0,
                             f = c,
                             g = []; b > e;) {
                        var h = a[e];
                        for (d in f) if (f[d].key == h) {
                            f = f[d].children;
                            break
                        }
                        e++
                    }
                    for (e = 0; e < f.length;) f[e].invalid && g.push(f[e].key),
                        e++;
                    return g
                }
                function g(a, b) {
                    for (var c = []; a;) c[--a] = !0;
                    return c[b] = !1,
                        c
                }
                function h(a) {
                    var b, c = [];
                    for (b = 0; a > b; b++) c[b] = s.labels && s.labels[b] ? s.labels[b] : b;
                    return c
                }
                function i(a, c, d) {
                    var e, f, g, h = 0,
                        i = [[]],
                        l = B;
                    if (c) for (e = 0; c > e; e++) u ? i[0][e] = {}: i[e] = [{}];
                    for (; h < a.length;) {
                        for (u ? i[0][h] = k(l, C[h]) : i[h] = [k(l, C[h])], e = 0, g = b; e < l.length && g === b;) l[e].key == a[h] && (d !== b && d >= h || d === b) && (g = e),
                            e++;
                        if (g !== b && l[g].children) h++,
                            l = l[g].children;
                        else {
                            if (! (f = j(l)) || !f.children) return i;
                            h++,
                                l = f.children
                        }
                    }
                    return i
                }
                function j(a, b) {
                    if (!a) return ! 1;
                    for (var c, d = 0; d < a.length;) if (! (c = a[d++]).invalid) return b ? d - 1 : c;
                    return ! 1
                }
                function k(a, b) {
                    for (var c = {
                            keys: [],
                            values: [],
                            label: b
                        },
                             d = 0; d < a.length;) c.values.push(a[d].value),
                        c.keys.push(a[d].key),
                        d++;
                    return c
                }
                function l(b, c) {
                    a(".dwfl", b).css("display", "").slice(c).hide()
                }
                function m(a) {
                    for (var b, c = [], d = a, e = !0, f = 0; e;) b = j(d),
                        c[f++] = b.key,
                        e = b.children,
                    e && (d = e);
                    return c
                }
                function n(a, c) {
                    var d, e, f, g = [],
                        h = B,
                        i = 0,
                        k = !1;
                    if (a[i] !== b && c >= i) for (d = 0, e = a[i], f = b; d < h.length && f === b;) h[d].key != a[i] || h[d].invalid || (f = d),
                        d++;
                    else f = j(h, !0),
                        e = h[f].key;
                    for (k = f !== b ? h[f].children: !1, g[i] = e; k;) {
                        if (h = h[f].children, i++, k = !1, f = b, a[i] !== b && c >= i) for (d = 0, e = a[i], f = b; d < h.length && f === b;) h[d].key != a[i] || h[d].invalid || (f = d),
                            d++;
                        else f = j(h, !0),
                            f = f === !1 ? b: f,
                            e = h[f].key;
                        k = f !== b && j(h[f].children) ? h[f].children: !1,
                            g[i] = e
                    }
                    return {
                        lvl: i + 1,
                        nVector: g
                    }
                }
                function o(c) {
                    var d = [];
                    return y = y > z++?y: z,
                        c.children("li").each(function(c) {
                            var e = a(this),
                                f = e.clone();
                            f.children("ul,ol").remove();
                            var g = f.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                                h = e.attr("data-invalid") ? !0 : !1,
                                i = {
                                    key: e.attr("data-val") === b || null === e.attr("data-val") ? c: e.attr("data-val"),
                                    value: g,
                                    invalid: h,
                                    children: null
                                },
                                j = e.children("ul,ol");
                            j.length && (i.children = o(j)),
                                d.push(i)
                        }),
                        z--,
                        d
                }
                var p, q, r = a.extend({},
                    c.settings),
                    s = a.extend(c.settings, d, r),
                    t = s.layout || (/top|bottom/.test(s.display) ? "liquid": ""),
                    u = "liquid" == t,
                    v = s.readonly,
                    w = a(this),
                    x = this.id + "_dummy",
                    y = 0,
                    z = 0,
                    A = {},
                    B = s.wheelArray || o(w),
                    C = h(y),
                    D = 1,
                    E = [],
                    F = m(B),
                    G = i(F, y);
                return a("#" + x).remove(),
                s.showInput && (p = a('<input type="text" id="' + x + '" value="" class="' + s.inputClass + '" placeholder="' + (s.placeholder || "") + '" readonly />').insertBefore(w), s.anchor = p, c.attachShow(p)),
                s.wheelArray || w.hide().closest(".ui-field-contain").trigger("create"),
                {
                    width: 50,
                    wheels: G,
                    layout: t,
                    headerText: !1,
                    formatResult: function(a) {
                        return a.slice(0, D).join(" ")
                    },
                    parseValue: function(a) {
                        return a ? (a + "").split(" ") : (s.defaultValue || F).slice(0)
                    },
                    onBeforeShow: function() {
                        var a = c.temp;
                        E = a.slice(0),
                            s.wheels = i(a, y, y),
                            q = !0
                    },
                    onValueFill: function(a, b) {
                        p && p.val(a),
                        b && w.change()
                    },
                    onShow: function(b) {
                        a(".dwwl", b).on("mousedown touchstart",
                            function() {
                                clearTimeout(A[a(".dwwl", b).index(this)])
                            })
                    },
                    onDestroy: function() {
                        p && p.remove(),
                            w.show()
                    },
                    validate: function(a, d, f) {
                        var h, j, k = [],
                            m = c.temp,
                            o = (d || 0) + 1;
                        if (d !== b && E[d] != m[d] || d === b && !q) {
                            for (s.wheels = i(m, null, d), j = n(m, d === b ? m.length: d), D = j.lvl, h = 0; h < m.length; h++) c.temp[h] = j.nVector[h] || 0;
                            for (; o < j.lvl;) k.push(o++);
                            if (k.length) return s.readonly = g(y, d),
                                clearTimeout(A[d]),
                                A[d] = setTimeout(function() {
                                        q = !0,
                                            l(a, j.lvl),
                                            E = c.temp.slice(0),
                                            c.changeWheel(k, d === b ? f: 0, d !== b),
                                            s.readonly = v
                                    },
                                    d === b ? 0 : 1e3 * f),
                                !1
                        } else j = n(m, m.length),
                            D = j.lvl;
                        E = m.slice(0),
                            e(a, j.lvl, B, m),
                            l(a, j.lvl),
                            q = !1
                    }
                }
            };
        a.each(["list", "image", "treelist"],
            function(a, b) {
                c.presets.scroller[b] = e,
                    c.presetShort(b)
            })
    } (jQuery),
    function(a, b) {
        var c = {
            inputClass: "",
            invalid: [],
            rtl: !1,
            showInput: !0,
            group: !1,
            groupLabel: "Groups",
            checkIcon: "checkmark"
        };
        a.mobiscroll.presetShort("select"),
            a.mobiscroll.presets.scroller.select = function(d) {
                function e(b, c, d) {
                    a("option", b).each(function() {
                        d.push(this.text),
                            c.push(this.value),
                        this.disabled && F.push(this.value)
                    })
                }
                function f() {
                    var b, c, d = 0,
                        f = [],
                        g = [],
                        h = [[]];
                    return v.group ? (a("optgroup", y).each(function(a) {
                        f.push(this.label),
                            g.push(a)
                    }), c = {
                        values: f,
                        keys: g,
                        label: v.groupLabel
                    },
                        x ? h[0][d] = c: h[d] = [c], b = m, d++) : b = y,
                        f = [],
                        g = [],
                        E ? a("optgroup", y).each(function(a) {
                            f.push(this.label),
                                g.push("__group" + a),
                                F.push("__group" + a),
                                e(this, g, f)
                        }) : e(b, g, f),
                        c = {
                            multiple: z,
                            values: f,
                            keys: g,
                            label: C
                        },
                        x ? h[0][d] = c: h[d] = [c],
                        h
                }
                function g(c) {
                    var d = a("option", y).attr("value");
                    p = z ? c ? c[0] : d: c === b || null === c ? d: c,
                    v.group && (m = y.find('option[value="' + p + '"]').parent(), l = m.index())
                }
                function h(a, b, c) {
                    var e = [];
                    if (z) {
                        var f = [],
                            g = 0;
                        for (g in d._selectedValues) f.push(H[g]),
                            e.push(g);
                        n.val(f.join(", "))
                    } else n.val(a),
                        e = b ? d.temp[o] : null;
                    b && (y.val(e), c && (r = !0, y.change()))
                }
                function i(a) {
                    var b = a.attr("data-val"),
                        c = a.hasClass("dw-msel");
                    return z && a.closest(".dwwl").hasClass("dwwms") ? (a.hasClass("dw-v") && (c ? (a.removeClass(D).removeAttr("aria-selected"), delete d._selectedValues[b]) : (a.addClass(D).attr("aria-selected", "true"), d._selectedValues[b] = b), d.live && h(b, !0, !0)), !1) : void 0
                }
                var j, k, l, m, n, o, p, q, r, s, t, u = a.extend({},
                    d.settings),
                    v = a.extend(d.settings, c, u),
                    w = v.layout || (/top|bottom/.test(v.display) ? "liquid": ""),
                    x = "liquid" == w,
                    y = a(this),
                    z = y.prop("multiple"),
                    A = this.id + "_dummy",
                    B = a('label[for="' + this.id + '"]').attr("for", A),
                    C = v.label !== b ? v.label: B.length ? B.text() : y.attr("name"),
                    D = "dw-msel mbsc-ic mbsc-ic-" + v.checkIcon,
                    E = a("optgroup", y).length && !v.group,
                    F = [],
                    G = [],
                    H = {},
                    I = v.readonly;
                v.group && !a("optgroup", y).length && (v.group = !1),
                v.invalid.length || (v.invalid = F),
                    v.group ? (k = 0, o = 1) : (k = -1, o = 0),
                    a("option", y).each(function() {
                        H[this.value] = this.text
                    }),
                    g(y.val()),
                    a("#" + A).remove(),
                    n = a('<input type="text" id="' + A + '" class="' + v.inputClass + '" placeholder="' + (v.placeholder || "") + '" readonly />'),
                v.showInput && n.insertBefore(y),
                    d.attachShow(n);
                var J = y.val() || [],
                    K = 0;
                for (K; K < J.length; K++) d._selectedValues[J[K]] = J[K];
                return h(H[p]),
                    y.off(".dwsel").on("change.dwsel",
                        function() {
                            r || d.setValue(z ? y.val() || [] : [y.val()], !0),
                                r = !1
                        }).addClass("dw-hsel").attr("tabindex", -1).closest(".ui-field-contain").trigger("create"),
                d._setValue || (d._setValue = d.setValue),
                    d.setValue = function(c, e, f, g, i) {
                        var j, k, n = a.isArray(c) ? c[0] : c;
                        if (p = n !== b && null !== n ? n: a("option", y).attr("value"), z && (d._selectedValues = {},
                                c)) for (j = 0; j < c.length; j++) d._selectedValues[c[j]] = c[j];
                        if (null === n ? k = null: v.group ? (m = y.find('option[value="' + p + '"]').parent(), l = m.index(), k = [l, p]) : k = [p], d._setValue(k, e, f, g, i), e) {
                            var o = z ? !0 : p !== y.val();
                            h(H[p], o, i === b ? e: i)
                        }
                    },
                    d.getValue = function(a, b) {
                        var c = a ? d.temp: d._hasValue ? d.values: null;
                        return c ? v.group && b ? c: c[o] : null
                    },
                {
                    width: 50,
                    wheels: t,
                    layout: w,
                    headerText: !1,
                    anchor: n,
                    formatResult: function(a) {
                        return H[a[o]]
                    },
                    parseValue: function(a) {
                        var c = y.val() || [],
                            e = 0;
                        if (z) for (d._selectedValues = {},
                                        e; e < c.length; e++) d._selectedValues[c[e]] = c[e];
                        return g(a === b ? y.val() : a),
                            v.group ? [l, p] : [p]
                    },
                    onBeforeShow: function() {
                        z && v.counter && (v.headerText = function() {
                            var b = 0;
                            return a.each(d._selectedValues,
                                function() {
                                    b++
                                }),
                            b + " " + v.selectedText
                        }),
                            g(y.val()),
                        v.group && (q = l, d.temp = [l, p]),
                            v.wheels = f()
                    },
                    onMarkupReady: function(b) {
                        b.addClass("dw-select"),
                            a(".dwwl" + k, b).on("mousedown touchstart",
                                function() {
                                    clearTimeout(s)
                                }),
                        E && (a(".dw", b).addClass("dw-select-gr"), a('.dw-li[data-val^="__group"]', b).addClass("dw-w-gr")),
                        z && (b.addClass("dwms"), a(".dwwl", b).on("keydown",
                            function(b) {
                                32 == b.keyCode && (b.preventDefault(), b.stopPropagation(), i(a(".dw-sel", this)))
                            }).eq(o).addClass("dwwms").attr("aria-multiselectable", "true"), G = a.extend({},
                            d._selectedValues))
                    },
                    validate: function(c, e, g) {
                        var h, i, n = a(".dw-ul", c).eq(o);
                        if (e === b && z) {
                            i = d._selectedValues,
                                h = 0,
                                a(".dwwl" + o + " .dw-li", c).removeClass(D).removeAttr("aria-selected");
                            for (h in i) a(".dwwl" + o + ' .dw-li[data-val="' + i[h] + '"]', c).addClass(D).attr("aria-selected", "true")
                        }
                        if (!v.group || e !== b && e !== k) p = d.temp[o];
                        else if (l = +d.temp[k], l !== q) {
                            if (m = y.find("optgroup").eq(l), p = m.find("option").not("[disabled]").eq(0).val(), p = p || y.val(), v.wheels = f(), !j) return d.temp = [l, p],
                                v.readonly = [!1, !0],
                                clearTimeout(s),
                                s = setTimeout(function() {
                                        j = !0,
                                            q = l,
                                            d.changeWheel([o], b, !0),
                                            v.readonly = I
                                    },
                                    1e3 * g),
                                !1
                        } else v.readonly = I;
                        a.each(v.invalid,
                            function(b, c) {
                                a('.dw-li[data-val="' + c + '"]', n).removeClass("dw-v")
                            }),
                            j = !1
                    },
                    onClear: function(b) {
                        d._selectedValues = {},
                            n.val(""),
                            a(".dwwl" + o + " .dw-li", b).removeClass(D).removeAttr("aria-selected")
                    },
                    onValueTap: i,
                    onSelect: function(a) {
                        h(a, !0, !0)
                    },
                    onCancel: function() { ! d.live && z && (d._selectedValues = a.extend({},
                        G))
                    },
                    onChange: function(a) {
                        d.live && !z && (n.val(a), r = !0, y.val(d.temp[o]).change())
                    },
                    onDestroy: function() {
                        n.remove(),
                            y.removeClass("dw-hsel").removeAttr("tabindex")
                    }
                }
            }
    } (jQuery);