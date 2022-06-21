// Tracks "location" in simulated direcotries
var myLocation = "mainDir";
//Adds a <br> to mainDiv
addBr = function() {
    var myBr = $("<br>");
    $("#mainDiv").append(myBr);
}
// Adds Location marker and Input field after each command. Updates Location marker to reflect "current directory"
addCommand = function(){
    var clSim = document.createElement("input");
    clSim.type = "text";
    clSim.value = "";
    var locCode = "";
    switch (myLocation) {
        case "mainDir":
            locCode = "";
            break;
        case "About":
            locCode = "/About";
            break;
        case "Products":
            locCode = "/Products";
            break;
        case "Symbiote":
            locCode = "/Symbiote";
            break;
        case "AESOP":
            locCode = "/AESOP";
            break;
        case "News":
            locCode = "/News";
            break;
        case "Media":
            locCode = "/Media";
            break;
        case "Team":
            locCode = "/Team";
            break;
        case "Jobs":
            locCode = "/Jobs";
            break;
    }
    $("#mainDiv").append(` [user@server ~${locCode}]$ `);
    $("#mainDiv").append(clSim);
}
//Removes all children of #mainDiv 
clearAll = function() {
    $("#mainDiv").empty();
    addCommand();
    $("input").focus();
}
//Lists the contents of the "Directory" based on current location (myLocation)
listItems = function(){
    switch (myLocation) {
        case "mainDir":
            let mainLs = document.createElement("div");
            mainLs.setAttribute("class","listContents");
            mainLs.innerHTML += "About<br>Products<br>News<br>Media<br>Team<br>Jobs";
            $("#mainDiv").append(mainLs);
            break;
        case "About":
            let abtLs = document.createElement("div");
            abtLs.innerHTML += "ABOUT<br>~~~~~<br><br>Red Balloon Security’s Symbiote Defense is the only embedded host-based defense \
            technology that offers seamless compatibility with any operating system, any CPU, any \
            hardware platform, and works at the binary firmware level without ever requiring access \
            to a single line of source code. Symbiote, the first host-based defense invented \
            specifically to secure all embedded systems, is currently protecting over 1 million \
            commercial embedded devices around the globe.<br><br>\
            The Red Balloon Security research team is comprised of world-class scientists and \
            engineers from academic, commercial, and government backgrounds with a collective vision \
            \to secure all the devices around us.";
            let uniCont = $("#Unicorn").text();
            let uniPre = $("<pre>");
            uniPre.text(uniCont);
            $("#mainDiv").append(uniPre, abtLs);
            break;
        case "Products":
            let prdLs = document.createElement("div");
            prdLs.setAttribute("class","listContents");
            prdLs.innerHTML += "Symbiote<br>AESOP";
            $("#mainDiv").append(prdLs);
            break;
        case "Symbiote":
            let symLs = document.createElement("div");
            symLs.innerHTML += "<br>PROJECT SYMBIOTE<br>~~~~~~~~~~<br>\
            The First Universal Embedded Defense for all embedded devices<br><br> \
            Cyber-security threat actors today are shifting to the lowest hanging fruit. Most \
            networked devices shipping today are not desktops, laptops or servers and none of them have \
            strong host-based defense. Your automotive, point-of-sale, unified communications, Internet-of-Things, \
            SCADA, home and office equipment are highly vulnerable and are actively being compromised today, \
            whether for corporate espionage, financial fraud, or state-to-state cyber warfare. Red Balloon Security \
            is devoted to hardening all devices against malicious intrusion.<br><br> \
            Device manufacturers can now inject Symbiote Defense into any device regardless of CPU type and operating \
            system. No hardware or source code modifications required.";
            $("#mainDiv").append(symLs);
            break;
        case "AESOP":
            let aesLs = document.createElement("div");
            aesLs.innerHTML += "<br>AESOP<br>~~~~~<br>\
            AESOP is amazing, etc.";
            $("#mainDiv").append(aesLs);
            break;
        case "News":
            let newsLs = document.createElement("div");
            let aLink = document.createElement("a");
            aLink.href = 'https://www.bloomberg.com/news/articles/2019-11-11/security-researchers-discover-flaws-in-u-s-cash-machines';
            aLink.innerHTML = "Learn More<br><br>";
            newsLs.innerHTML += "<br>Nautilus ATM Flaws Could Allow Hackers Access to Cash, Data<br>~~~~~~~~~~<br>\
            Bloomberg - November 11, 2019, 6:00 AM EST<br><br> \
            A pair of security researchers has discovered two  \
            vulnerabilities in ATMs widely used across the U.S. that \
            could allow a determined criminal to steal cash and \
            customer data.<br><br>";
            $("#mainDiv").append(newsLs);
            $("#mainDiv").append(aLink);
            break;
        case "Media":
            let uniCont2 = $("#Unicorn").text();
            let uniPre2 = $("<pre>");
            uniPre2.text(uniCont2);
            $("#mainDiv").append(uniPre2);
            break;
        case "Team":
            let teamLs = document.createElement("div");
            teamLs.innerHTML += "<br>Team<br>~~~~~~~~~~<br>\
            Red Balloon Security is comprised of a world-class team of researchers, scientists and engineers<br><br>";
            $("#mainDiv").append(teamLs);
            break;
        case "Jobs":
            let jobsLs = document.createElement("div");
            jobsLs.innerHTML += "<br>Career Opportunities<br>~~~~~~~~~~<br>\
            Red Balloon Security is hiring. Contact us about open positions at RBS.<br><br>";
            $("#mainDiv").append(jobsLs);
            break;
    }
    addCommand();
    $("input").focus();
}
//Gets commands from active input field and appends corresponding children elements
inputCommand = function(){
    $("#mainDiv").on("keypress","input",function(e){
        if (e.which == 10 || e.which == 13) {
            var myVal = $("input:text").val();
            $("input").replaceWith(myVal);
            switch (myVal) {
                case "":
                    $("<br>").appendTo("#mainDiv");
                    addCommand();
                    $("input").focus();
                    break;
                case "help":
                    let helpMessage = document.createElement("div");
                    helpMessage.innerHTML += "These shell commands are defined internally.<br>Type help to see this list.<br><br>"
                    helpMessage.innerHTML += "cd [dir] - change directory<br>cd ~ - Main Directory<br>ls - list contents of current directory<br>clear - clear screen<br>help - show this list<br><br>"
                    $("#mainDiv").append(helpMessage);
                    addCommand();
                    $("input").focus();
                    break;
                case "clear":
                    clearAll();
                    break;
                case "ls":
                    listItems();
                    break;
                // Change Directoty commands
                case "cd ~":
                    myLocation = "mainDir";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                case "cd About":
                    myLocation = "About";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                case "cd Products":
                    myLocation = "Products";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                case "cd Symbiote":
                    myLocation = "Symbiote";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                case "cd AESOP":
                    myLocation = "AESOP";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                case "cd News":
                    myLocation = "News";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                case "cd Media":
                    myLocation = "Media";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                case "cd Team":
                    myLocation = "Team";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                case "cd Jobs":
                    myLocation = "Jobs";
                    addBr();
                    addCommand();
                    $("input").focus();
                    break;
                default:
                let errorMessage = document.createElement("div");
                errorMessage.innerHTML += `-bash: ${myVal}: command not found`;
                errorMessage.innerHTML += "<br>";
                $("#mainDiv").append(errorMessage);
                addCommand();
                $("input").focus();
            }
        }   
    });
}
$(document).ready(function(){
    addCommand();
    $("input").focus();
    inputCommand();
});

