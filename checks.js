var checks = [

    { type: "DOMAIN", name: "Threat Crowd Graph", url_mask: "http://threatcrowd.org/domain.php?domain=%DOMAIN%" },
    { type: "EMAIL", name: "EMAIL: Threat Crowd", mask: "https://threatcrowd.org/email.php?email=%EMAIL%" },
    { type: "DOMAIN", name: "Url Void", url_mask: "http://www.urlvoid.com/scan/%DOMAIN%" },
    { type: "DOMAIN", name: "Alien Vault", url_mask: "https://otx.alienvault.com/indicator/hostname/%DOMAIN%/" },
    { type: "DOMAIN", name: "Virustotal", url_mask: "https://www.virustotal.com/en/domain/%DOMAIN%/information/" },
    { type: "DOMAIN", name: "Observatory", url_mask: "https://observatory.mozilla.org/analyze.html?host=%DOMAIN%" },
    { type: "DOMAIN", name: "Up Guard", url_mask: "https://app.upguard.com/webscan?url=%DOMAIN%" },
    { type: "DOMAIN", name: "Whois", url_mask: "https://www.whois.com/whois/%DOMAIN%" },
    { type: "IP", name: "Shodan", ip_mask: "https://www.shodan.io/host/%IP%" },
    { type: "*", name: "web server scanner", ip_mask: "https://pentest-tools.com/website-vulnerability-scanning/web-server-scanner" },
    { type: "*", name: "google hacking", ip_mask: "https://pentest-tools.com/information-gathering/google-hacking#" }
];
