var checks = [

    { type: "EMAIL", name: "Threat Crowd Graph", mask: "https://threatcrowd.org/email.php?email=%%" },
    { type: "DOMAIN", name: "Threat Crowd Graph", mask: "http://threatcrowd.org/domain.php?domain=%%" },
    { type: "DOMAIN", name: "Url Void", mask: "http://www.urlvoid.com/scan/%%" },
    { type: "DOMAIN", name: "Alien Vault", mask: "https://otx.alienvault.com/indicator/hostname/%%/" },
    { type: "DOMAIN", name: "Virustotal", mask: "https://www.virustotal.com/en/domain/%%/information/" },
    { type: "DOMAIN", name: "Observatory", mask: "https://observatory.mozilla.org/analyze.html?host=%%" },
    { type: "DOMAIN", name: "Up Guard", mask: "https://app.upguard.com/webscan?url=%%" },
    { type: "DOMAIN", name: "Whois", mask: "https://www.whois.com/whois/%%" },
    { type: "DOMAIN", name: "Security Analyser for ASP.NET", mask: "https://asafaweb.com/Scan?Url=%%" },
    { type: "DOMAIN", name: "Google Dork: Trello", mask: "https://www.google.com/search?hl=ru&q=inurl%3Atrello.com+AND+intext%3A%%" },
    { type: "IP", name: "Shodan", mask: "https://www.shodan.io/host/%%" },
    { type: "IP", name: "I Know What You Download", mask: "https://iknowwhatyoudownload.com/ru/peer/?ip=%%" },    
    { type: "*", name: "web server scanner", mask: "https://pentest-tools.com/website-vulnerability-scanning/web-server-scanner" },
    { type: "*", name: "google hacking", mask: "https://pentest-tools.com/information-gathering/google-hacking#" },
    { type: "DOMAIN", name: "RusProfile (Company Name Info)", mask: "https://www.rusprofile.ru/search?query=%%" }
];
