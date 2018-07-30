function colorsSwitch() {
                // variables
                var img1="https://imgur.com/zgIIKss.png";
                var img2="https://imgur.com/re8ppuH.png";
                var img3="https://imgur.com/4OQ3jSC.png";
                var img4="https://imgur.com/RP5bQuZ.png";
                var img5="https://imgur.com/jyplQAm.png";
                //
                //
                //
                if (document.cookie.split(';').filter((item) => item.includes('chosencolor=')).length) {
                    var x = document.cookie.replace(/(?:(?:^|.*;\s*)chosencolor\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                } else {
                    document.cookie = "chosencolor=1";
                    var x = document.cookie.replace(/(?:(?:^|.*;\s*)chosencolor\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                }
                //
                //
                //
                var truvalue = parseInt(x);
                var speechtext = document.getElementById('speechtext');
                switch (truvalue) {
                    case 1:
                        $('link[href="https://sudaknees.github.io/hogsb.css"]').prop('disabled', false);
                        $('link[href="https://sudaknees.github.io/gryfsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/slysb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/huffsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/ravsb.css"]').prop('disabled', true);
                        var b = document.getElementsByTagName("BODY");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.backgroundColor = "{color:background}";
                        }
                        var b = document.getElementsByTagName("A");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.color = "{color:stats bars}";
                        }
                        //
                        document.getElementById("swapper").src = img1;
                        document.getElementById("playericon").src = "https://imgur.com/LjXc5sZ.png";
                        speechtext.innerHTML = "glad to be here! always an eager student of <b>hogwarts</b>, ready to learn!";
                        document.getElementById("hp").style.background = "{color:stats bars}";
                        document.getElementById("atk").style.background = "{color:stats bars}";
                        document.getElementById("def").style.background = "{color:stats bars}";
                        document.getElementById("hp").style.width = "45px";
                        document.getElementById("atk").style.width = "60px";
                        document.getElementById("def").style.width = "50px";
                        break;
                        //
                        //
                        //
                    case 2:
                        $('link[href="https://sudaknees.github.io/hogsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/gryfsb.css"]').prop('disabled', false);
                        $('link[href="https://sudaknees.github.io/slysb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/huffsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/ravsb.css"]').prop('disabled', true);
                        var b = document.getElementsByTagName("BODY");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.backgroundColor = "{color:gryffindor background}";
                        }
                        var b = document.getElementsByTagName("A");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.color = "{color:gryffindor stats bars}";
                        }
                        //
                        document.getElementById("swapper").src = img2;
                        document.getElementById("playericon").src = "https://imgur.com/AjgJbGg.png";
                        speechtext.innerHTML = "i love being a <b>gryffindor</b>, where bravery and chivalry are valued above all.";
                        document.getElementById("hp").style.background = "{color:gryffindor stats bars}";
                        document.getElementById("atk").style.background = "{color:gryffindor stats bars}";
                        document.getElementById("def").style.background = "{color:gryffindor stats bars}";
                        document.getElementById("hp").style.width = "73px";
                        document.getElementById("atk").style.width = "90px";
                        document.getElementById("def").style.width = "50px";
                        break;
                        //
                        //
                        //
                    case 3:
                        $('link[href="https://sudaknees.github.io/hogsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/gryfsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/slysb.css"]').prop('disabled', false);
                        $('link[href="https://sudaknees.github.io/huffsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/ravsb.css"]').prop('disabled', true);
                        var b = document.getElementsByTagName("BODY");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.backgroundColor = "{color:slytherin background}";
                        }
                        var b = document.getElementsByTagName("A");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.color = "{color:slytherin stats bars}";
                        }
                        //
                        document.getElementById("swapper").src = img3;
                        document.getElementById("playericon").src = "https://imgur.com/o7TvpQa.png";
                        speechtext.innerHTML = "being a <b>slytherin</b> is the best! i'm more cunning and ambitious than the rest.";
                        document.getElementById("hp").style.background = "{color:slytherin stats bars}";
                        document.getElementById("atk").style.background = "{color:slytherin stats bars}";
                        document.getElementById("def").style.background = "{color:slytherin stats bars}";
                        document.getElementById("hp").style.width = "55px";
                        document.getElementById("atk").style.width = "75px";
                        document.getElementById("def").style.width = "85px";
                        break;
                        //
                        //
                        //
                    case 4:
                        $('link[href="https://sudaknees.github.io/hogsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/gryfsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/slysb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/huffsb.css"]').prop('disabled', false);
                        $('link[href="https://sudaknees.github.io/ravsb.css"]').prop('disabled', true);
                        var b = document.getElementsByTagName("BODY");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.backgroundColor = "{color:hufflepuff background}";
                        }
                        var b = document.getElementsByTagName("A");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.color = "#8C7853";
                        }
                        //
                        document.getElementById("swapper").src = img4;
                        document.getElementById("playericon").src = "https://imgur.com/aH3IHjk.png";
                        speechtext.innerHTML = "the fantastic house of <b>hufflepuff</b> is only for those who are kind and loyal at heart.";
                        document.getElementById("hp").style.background = "{color:hufflepuff stats bars}";
                        document.getElementById("atk").style.background = "{color:hufflepuff stats bars}";
                        document.getElementById("def").style.background = "{color:hufflepuff stats bars}";
                        document.getElementById("hp").style.width = "70px";
                        document.getElementById("atk").style.width = "80px";
                        document.getElementById("def").style.width = "55px";
                        break;
                        //
                        //
                        //
                    case 5:
                        $('link[href="https://sudaknees.github.io/hogsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/gryfsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/slysb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/huffsb.css"]').prop('disabled', true);
                        $('link[href="https://sudaknees.github.io/ravsb.css"]').prop('disabled', false);
                        var b = document.getElementsByTagName("BODY");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.backgroundColor = "{color:ravenclaw background}";
                        }
                        var b = document.getElementsByTagName("A");
                        var i;
                        for (i = 0; i < b.length; i++) {
                            b[i].style.color = "{color:ravenclaw stats bars}";
                        }
                        //
                        document.getElementById("swapper").src = img5;
                        document.getElementById("playericon").src = "https://imgur.com/1MmyDH4.png";
                        speechtext.innerHTML = "<b>ravenclaw</b> is only for those of us with intelligence and wit beyond compare.";
                        document.getElementById("hp").style.background = "{color:ravenclaw stats bars}";
                        document.getElementById("atk").style.background = "{color:ravenclaw stats bars}";
                        document.getElementById("def").style.background = "{color:ravenclaw stats bars}";
                        document.getElementById("hp").style.width = "90px";
                        document.getElementById("atk").style.width = "45px";
                        document.getElementById("def").style.width = "80px";
                        break;
                }
            }
