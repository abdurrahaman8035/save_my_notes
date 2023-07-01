var brokenstring = new Array();
var subjectname = new Array();
var parentid = new Array();
var xmlhttp;

function starter() {}


function showlevel(thevalue) {


    if (thevalue == "1" || thevalue == "2") {
        document.getElementById('formtype').value = "academicform";
        // if (document.all)
        // {
        //       document.all['academicform'].style.visibility="visible";  // Necessary only for IE4
        //       document.all['academicform'].style.display="block";  // Necessary only for IE4

        //       document.all['nonacademicform'].style.visibility="invisible";  // Necessary only for IE4
        //       document.all['nonacademicform'].style.display="none";  // Necessary only for IE4
        // }
        // else
        // {
        document.getElementById('academicform').style.visibility = 'visible';
        document.getElementById('academicform').style.display = 'block';

        document.getElementById('nonacademicform').style.visibility = 'hidden';
        document.getElementById('nonacademicform').style.display = 'none';

        document.getElementById('nonacademicform2').style.visibility = 'hidden';
        document.getElementById('nonacademicform2').style.display = 'none';
        // 	        }

    } else {
        document.getElementById('formtype').value = "nonacademicform";
        //        if (document.all)
        //       {
        //         document.all['academicform'].style.visibility="invisible";  // Necessary only for IE4
        //     document.all['academicform'].style.display="none";  // Necessary only for IE4

        //         document.all['nonacademicform'].style.visibility="visible";  // Necessary only for IE4
        //     document.all['nonacademicform'].style.display="block";  // Necessary only for IE4
        //       }
        //       else
        //       {
        document.getElementById('academicform').style.visibility = 'hidden';
        document.getElementById('academicform').style.display = 'none';

        document.getElementById('nonacademicform').style.visibility = 'visible';
        document.getElementById('nonacademicform').style.display = 'block';
        document.getElementById('nonacademicform2').style.visibility = 'visible';
        document.getElementById('nonacademicform2').style.display = 'block';
        //       }

    }


}


function addOption(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
}





function buildlist(selectbox, str) {

    brokenstring = str.split("|");
    brokenstring.pop();
    var breakpoint;


    //var theDropDown = document.getElementById("subject_list")
    var numberOfOptions = selectbox.options.length
    for (i = 0; i < numberOfOptions; i++) {
        //Note: Always remove(0) and NOT remove(i)
        selectbox.remove(0)
    }



    addOption(selectbox, 'select:', 'none');


    for (var count = 0; count < brokenstring.length; count++) {
        subjectname = brokenstring[count].split("#");
        addOption(selectbox, subjectname[1], subjectname[0]);
    }
}


function buildDiv(DivBox, LinkBox, str) {
    document.getElementById(DivBox).innerHTML = str;

    document.getElementById(LinkBox).innerHTML = "<hr class='moreenquiries'>";
}





function GetXmlHttpObject() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject) {
        // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}


function get_list(selectbox, str) {

    xmlhttp = GetXmlHttpObject();

    var url = "/gen-list.asp?qu=" + str;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {


            buildlist(selectbox, xmlhttp.responseText);


        }
    }
    xmlhttp.open("GET", url, true);

    xmlhttp.send(null);

    //alert(brokenstring);

}


function processpaymentform(theform, str) {

    xmlhttp = GetXmlHttpObject();

    var url = "/enquiry-payment-book-complete.asp?" + str;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            theform.submit();
        }
    }
    xmlhttp.open("GET", url, true);

    xmlhttp.send(null);

}



function get_list_courses(selectbox, otherbox, str) {

    xmlhttp = GetXmlHttpObject();

    var url = "/gen-unicourses.asp?qu=" + str;

    //alert(url);


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {


            buildlist(selectbox, xmlhttp.responseText);


        }
    }
    xmlhttp.open("GET", url, true);

    xmlhttp.send(null);

    otherbox.value = "";
    otherbox.style.display = 'none';

    //alert(brokenstring);

}



function get_enquiries(DivBox, LinkBox, str) {
    xmlhttp = GetXmlHttpObject();

    var url = str // /gen-unicourses.asp?qu="+str;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            buildDiv(DivBox, LinkBox, xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}



function processonlinepayment(theform, str) {

    xmlhttp = GetXmlHttpObject();

    var url = "/members/online-lesson-book-create.asp?" + str;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            theform.submit();
        }
    }
    xmlhttp.open("GET", url, true);

    xmlhttp.send(null);

}



function get_searchresults(DivBox, str) {
    xmlhttp = GetXmlHttpObject();

    var url = str // /gen-unicourses.asp?qu="+str;

    document.getElementById(DivBox).innerHTML = "<p style='clear: both;'>&nbsp;</p><div id='profileresultsblock'><div id='profileresultscontent'><p style='clear: both;'>&nbsp;</p> <img src='/images/loading1.gif'/ style='display: block;margin-left:auto;margin-right:auto;padding-bottom:40px;'> </div></div>";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            document.getElementById(DivBox).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}

function get_vote(DivBox, strurl) {
    xmlhttp = GetXmlHttpObject();

    var url = strurl // /gen-unicourses.asp?qu="+str;

    // document.getElementById(DivBox).innerHTML= "";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            document.getElementById(DivBox).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}








function get_subpage(url, divblock) {
    xmlhttp = GetXmlHttpObject();



    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            document.getElementById(divblock).innerHTML = "";
            document.getElementById(divblock).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}


function get_subpagevalue(url, field) {
    xmlhttp = GetXmlHttpObject();



    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            document.getElementById(field).value = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}




function updatecontent(updateurl, subpageurl, divblock) {
    xmlhttp = GetXmlHttpObject();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            get_subpage(subpageurl, divblock);
        }
    }
    xmlhttp.open("GET", updateurl, true);
    xmlhttp.send(null);
}




function get_subpage_callback(url, callback) {
    xmlhttp = GetXmlHttpObject();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            callback();
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}
