var checks = [

    { type: "EMAIL", name: "[ThreatCrowd] Threat Crowd Graph by Email", mask: "https://threatcrowd.org/email.php?email=%%" },
    { type: "EMAIL", name: "Have I Been Pwned", mask: "https://haveibeenpwned.com/" },
    { type: "EMAIL", name: "Have I Been Pwned (full json)", mask: "https://api.haveibeenpwned.com/unifiedsearch/%%" },
    { type: "DOMAIN", name: "[ThreatCrowd] Threat Crowd Graph by Domain", mask: "http://threatcrowd.org/domain.php?domain=%%" },
    { type: "DOMAIN", name: "Url Void", mask: "http://www.urlvoid.com/scan/%%" },
    { type: "DOMAIN", name: "Alien Vault", mask: "https://otx.alienvault.com/indicator/hostname/%%/" },
    { type: "DOMAIN", name: "Virustotal", mask: "https://www.virustotal.com/en/domain/%%/information/" },
    { type: "DOMAIN", name: "Observatory", mask: "https://observatory.mozilla.org/analyze.html?host=%%" },
    { type: "DOMAIN", name: "Up Guard", mask: "https://app.upguard.com/webscan?url=%%" },
    { type: "DOMAIN", name: "Whois", mask: "https://www.whois.com/whois/%%" },
    { type: "DOMAIN", name: "Security Analyser for ASP.NET", mask: "https://asafaweb.com/Scan?Url=%%" },
    { type: "DOMAIN", name: "Google Dork: Trello", mask: "https://www.google.com/search?hl=ru&q=inurl%3Atrello.com+AND+intext%3A%%" },
    { type: "DOMAIN", name: "RusProfile (Company Name Info)", mask: "https://www.rusprofile.ru/search?query=%%" },
    { type: "IP", name: "Shodan", mask: "https://www.shodan.io/host/%%" },
    { type: "IP", name: "Censys", mask: "https://www.censys.io/ipv4/%%" },
    { type: "IP", name: "I Know What You Download", mask: "https://iknowwhatyoudownload.com/ru/peer/?ip=%%" },  
    { type: "*", name: "[pentest-tools.com] Server vulnerability scanning", mask: "https://pentest-tools.com/website-vulnerability-scanning/web-server-scanner" },
    { type: "*", name: "[pentest-tools.com] Google hacking", mask: "https://pentest-tools.com/information-gathering/google-hacking#" },
    { type: "*", name: "[ThreatCrowd] Domains by Owner Name", mask: "https://threatcrowd.org/listDomains.php?name=%%" },
    { type: "*", name: "[ThreatCrowd] Domains by Phone Number", mask: "https://threatcrowd.org/listDomains.php?tel=%%" }
];
