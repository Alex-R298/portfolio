import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<'de' | 'en'>('de');

  private english: { [key: string]: string } = {
    // Navigation
    'Über mich': 'About me',
    'Fähigkeiten': 'Skills',
    'Projekte': 'Projects',
    'Kontakt': 'Contact',

    // Hero Section
    'Hallo Welt': 'Hello World',
    'ICH BIN ALEX REITZ': "I'M ALEX REITZ",
    'Schreib mir': 'Get in Touch',

    // Buttons
    'Zurück': 'Go Back',
    'Nächstes Projekt': 'Next Project',

    // Privacy Policy - Header
    'Datenschutzerklärung': 'Privacy Policy',

    // Privacy Policy - Section 1
    '1. Datenschutz auf einen Blick': '1. Privacy at a Glance',
    'Allgemeine Hinweise': 'General Information',
    'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.':
      'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on data protection, please refer to our privacy policy below.',

    'Datenerfassung auf dieser Website': 'Data Collection on This Website',
    'Wer ist verantwortlich für die Datenerfassung auf dieser Website?':
      'Who is responsible for data collection on this website?',
    'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.':
      'Data processing on this website is carried out by the website operator. You can find their contact details in the section "Information on the Responsible Party" in this privacy policy.',

    'Wie erfassen wir Ihre Daten?': 'How do we collect your data?',
    'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.':
      'Your data is collected when you provide it to us. This may include data you enter into a contact form, for example.',
    'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.':
      'Other data is collected automatically or with your consent when you visit the website through our IT systems. This primarily includes technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.',

    'Wofür nutzen wir Ihre Daten?': 'What do we use your data for?',
    'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.':
      'Some data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other order requests.',

    'Welche Rechte haben Sie bezüglich Ihrer Daten?': 'What rights do you have regarding your data?',
    'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.':
      'You have the right at any time to receive free information about the origin, recipient, and purpose of your stored personal data. You also have the right to request correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.',
    'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.':
      'You can contact us at any time regarding these and other questions about data protection.',

    // Privacy Policy - Section 2
    '2. Hosting': '2. Hosting',
    'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:':
      'We host the content of our website with the following provider:',
    'Strato': 'Strato',
    'Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend „Strato"). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.':
      'The provider is Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (hereinafter "Strato"). When you visit our website, Strato collects various log files including your IP addresses.',
    'Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato:':
      'For more information, please refer to Strato\'s privacy policy:',
    'Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.':
      'The use of Strato is based on Art. 6 Para. 1 lit. f GDPR. We have a legitimate interest in the most reliable presentation of our website. If appropriate consent has been requested, processing is carried out exclusively on the basis of Art. 6 Para. 1 lit. a GDPR and § 25 Para. 1 TDDDG, insofar as consent includes the storage of cookies or access to information on the user\'s end device (e.g., device fingerprinting) within the meaning of the TDDDG. Consent can be revoked at any time.',

    // Privacy Policy - Section 3
    '3. Allgemeine Hinweise und Pflichtinformationen': '3. General Information and Mandatory Information',
    'Datenschutz': 'Data Protection',
    'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.':
      'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with legal data protection regulations and this privacy policy.',
    'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.':
      'When you use this website, various personal data is collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.',
    'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.':
      'We would like to point out that data transmission on the Internet (e.g., when communicating by email) may have security vulnerabilities. Complete protection of data from access by third parties is not possible.',

    'Hinweis zur verantwortlichen Stelle': 'Information on the Responsible Party',
    'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:':
      'The responsible party for data processing on this website is:',
    'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.':
      'The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of processing personal data (e.g., names, email addresses, etc.).',

    'Speicherdauer': 'Storage Duration',
    'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.':
      'Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you make a legitimate request for deletion or revoke consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial retention periods); in the latter case, deletion will occur after these reasons no longer apply.',

    'Kontaktformular': 'Contact Form',
    'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.':
      'If you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provided there, will be stored by us for processing the inquiry and in case of follow-up questions. We will not share this data without your consent.',

    'Quelle:': 'Source:',

    // Impressum / Legal Notice
    'Impressum': 'Legal Notice',
    'Angaben gemäß § 5 TMG:': 'Information according to § 5 TMG:',
    'Deutschland': 'Germany',
    'Kontakt:': 'Contact:',
    'Telefon:': 'Phone:',
    'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:': 'Responsible for content according to § 55 Para. 2 RStV:',
    'Haftung für Inhalte:': 'Liability for Content:',
    'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.':
      'As a service provider, we are responsible for our own content on these pages in accordance with § 7 Para. 1 TMG and general laws. However, according to §§ 8 to 10 TMG, we as a service provider are not obligated to monitor transmitted or stored third-party information.',
    'Haftung für Links:': 'Liability for Links:',
    'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.':
      'Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for these external contents.',
    'Urheberrecht:': 'Copyright:',
    'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.':
      'The content and works created by the site operators on these pages are subject to German copyright law.',

    // About Me Section
    'Hallo! Ich bin Alex Reitz, ein Frontend Developer mit einer Leidenschaft für sauberen Code und kreatives Design. Durch meine Umschulung habe ich viele Technologien gelernt, von Angular und TypeScript bis hin zu modernen Web-Technologien. Was mich antreibt?':
      'Hello! I\'m Alex Reitz, a Frontend Developer with a passion for clean code and creative design. Through my retraining, I\'ve learned many technologies, from Angular and TypeScript to modern web technologies. What drives me?',

    'Die Herausforderung, komplexe Probleme in elegante, benutzerfreundliche Lösungen zu verwandeln. Ich bin wissbegierig und lerne ständig dazu. Egal ob neue Frameworks, Programmiersprachen oder Entwicklungsmethoden. Ich bin immer auf der Suche nach neuen Projekten, die mich fordern und wachsen lassen.':
      'The challenge of turning complex problems into elegant, user-friendly solutions. I\'m curious and constantly learning. Whether it\'s new frameworks, programming languages, or development methods, I\'m always looking for new projects that challenge me and help me grow.',
    'Lass uns reden': 'Let\'s talk',

    'Das sind die Technologien und Tools, mit denen ich arbeite. Ich nutze verschiedene Skills, um Ideen Wirklichkeit werden zu lassen.':
      'These are the technologies and tools I work with. I use various skills to bring ideas to life.',

    'Außerdem': 'Additionally',
    'möchte ich mich': 'I want to',
    'einarbeiten in:': 'learn:',

    // Projects Section
    'Entdecke meine Projekte und probiere sie selbst aus. Ich zeige, wie ich responsive und nutzerfreundliche Anwendungen mit sauberem Code baue.':
      'Discover my projects and try them out yourself. I show how I build responsive and user-friendly applications with clean code.',

    'Diese App ist ein Slack-Clone. Sie revolutioniert Team-Kommunikation und Zusammenarbeit mit ihrer intuitiven Oberfläche, Echtzeit-Messaging und robuster Channel-Organisation.':
      'This app is a Slack clone. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',

    'Demnächst': 'Coming Soon',
    'Projektdetails': 'Project Details',

    // Project Details Modal
    'Beschreibung': 'Description',
    'Implementierungsdetails': 'Implementation Details',
    'Dauer:': 'Duration:',

    // Project Descriptions
    'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.':
      'Task manager inspired by the Kanban system. Create and organize tasks with drag-and-drop functionality, assign users and categories.',

    'In diesem Gruppenprojekt haben wir die Aufgaben aufgeteilt. Mein Fokus lag auf der Frontend-Entwicklung, wo ich die Drag-and-Drop-Funktionalität und das responsive Design umgesetzt habe.':
      'In this group project, we divided the tasks. My focus was on frontend development, where I implemented the drag-and-drop functionality and responsive design.',

    'Ein 2D-Plattformspiel mit objektorientierter Programmierung. Steuere den Helden, sammle Münzen und bekämpfe gefährliche Pilze auf deinem Weg zum Endboss.':
      'A 2D platform game with object-oriented programming. Control the hero, collect coins, and fight dangerous mushrooms on your way to the final boss.',

    'Ich habe das Spiel mit objektorientiertem JavaScript und HTML5 Canvas entwickelt. Meine Aufgaben umfassten Spiellogik, Kollisionserkennung und Sprite-Animationen. Der Code ist modular aufgebaut.':
      'I developed the game with object-oriented JavaScript and HTML5 Canvas. My tasks included game logic, collision detection, and sprite animations. The code is modularly structured.',

    '5 Wochen': '5 Weeks',
    '3 Wochen': '3 Weeks',

    'Demnächst Verfügbar': 'Coming Soon',
    'Profil': 'Profile',

    'Ich freue mich auf neue Projekte und Herausforderungen. Mit meiner Begeisterung für moderne Technologien und meinem Wissen aus der Umschulung möchte ich zu deinem Team beitragen und gemeinsam großartige Lösungen entwickeln.':
      'I\'m looking forward to new projects and challenges. With my enthusiasm for modern technologies and my knowledge from retraining, I want to contribute to your team and develop great solutions together.',

    'Lass uns über dein Projekt sprechen und schauen, wie ich mit meinen Skills einen Mehrwert schaffen kann.':
      'Let\'s talk about your project and see how I can create value with my skills.',

    // Contact Form
    'Bitte Datenschutzerklärung akzeptieren': 'Please accept the privacy policy',
    'Ich habe die': 'I have read the',
    'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.': 'and agree to the processing of my data as described.',
    'Wie kann ich dir helfen?': 'How can I help you?',
    'Was möchtest du umsetzen?': 'What would you like to develop?',
    'Hallo Alex, ich interessiere mich für...': 'Hello Alex, I am interested in...',
    'Wie lautet deine E-Mail?': 'What is your email?',
    'deineemail@email.com': 'youremail@email.com',
    'Wie heißt du?': 'What is your name?',
    'Dein Name': 'Your Name',

    // Validation Messages
    'Bitte Namen eingeben': 'Please enter your name',
    'Vor- und Nachname eingeben': 'Please enter first and last name',
    'Bitte E-Mail eingeben': 'Please enter your email',
    'Gültige E-Mail eingeben': 'Please enter a valid email',

    'Senden': 'Send',

    // Location Info
    'Wohnhaft in Welzheim': 'Based in Welzheim',
    'Offen für Umzug': 'Open to relocate',
    'Offen für Remote-Arbeit': 'Open to work remote',
  };

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'de' ? 'en' : 'de');
  }

  t(text: string): string {
    if (this.currentLang() === 'en' && this.english[text]) {
      return this.english[text];
    }
    return text;
  }
}