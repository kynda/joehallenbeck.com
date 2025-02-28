---
layout: page
title: Resume
permalink: /resume/
---

Download a typeset version for printing: [Resume][] <i class="fa fa-file-pdf-o" aria-hidden="true"></i>

Contact
-------------------------------------------------------------------------------

PO BOX 1072  
Alpine, AZ 85920  
Phone: (605) 645 8895  
Github: [Github][] <i class="fa fa-github" aria-hidden="true"></i>  
Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a>  

Work Experience
-------------------------------------------------------------------------------

**Senior Software Engineer**, Renaissance Learning, Wisconsin Rapids, WI (Remote) 01/2024 — Present

- Senior back-end role working on the EduClimber product which provides mandated
  MTSS reporting for schools and guidance counselors in domestic and
  international markets. 
- Managed twice weekly production releases to AWS environments and maintained
  infrastructure configuration through Terraform and Terraform Cloud (e.g.
  Infrastructure as Code).
- Addressed concerns around data authorization and optimized middleware for
  determining appropriate levels of access for teachers and staff to student
  records that met US and EU student privacy regulations. Maintained data
  storage systems subject to SOC 2 reporting and compliance.
- Lead an interdisciplinary team that developed a secure method of
  parent-teacher communication via email and a parent portal that fulfilled the
  requirements of Wisconsin Act 20. Resulting project moved Educlimber away from
  SMTP towards a serverless architecture using AWS Lambdas and queues to process
  email batches through SES with high availability, care for rate limits,
  respect for bounces, logging (via DataDog), and the ability to capture and
  retry failed messages.
- Processed data requests from client school districts requesting
  detailed custom reporting from back-end services.

**Senior Developer,** Fullbay, Phoenix, AZ 12/2018 -- 10/2023

- Worked in a fast-growing SAAS start up serving the heavy-duty equipment repair
  industry. Scaled team from two to over a dozen individual contributors in the
  first year while introducing Agile principles, git-flow, and test-driven
  development.
- Presented internal talks on test-driven development, unit test design,
  application security (OWASP Top Ten) and the PHP Standards Recommendations
  (PSR).
- Mentored junior developers through constructive code reviews, pairing, code
  walks throughs, and documentation.
- Migrated early back-end MVP written in a custom PHP5 framework to PHP8+ using
  the Larval 10 framework.
- Paired with external partners to co-develop interoperable REST and
  event-driven APIs that coordinated client services in processing invoices,
  alerting partners of workflow events, and GPS coordinates of on-site
  technicians.
- Implemented point of sale software that processed $2+ million monthly card
  terminal, card-not-present, ACH, and fleet check transactions through multiple
  payment processors (WorldPay, Payrix, Authorize.net, Stripe, and RoadSync).
- Developed an event-based system that notified customers of workflow progress
  through emails, pop-ups, and text messages (via Twilio).
- Used AWS services (Cloud Formation, Lambda, SNS, SQS) and Nodejs to create an
  event-based routing system allowing for concurrent and “eventually consistent”
  operations to be offloaded from the main client-facing server and onto a
  distribution of services.

**Software Engineer,** Research Square, Durham, NC 1/2015 -- 11/2018

- Supported legacy software and new feature development of an enterprise Zend
  Framework PHP application responsible for directing workflows and task
  assignment for a team of 300+ remote editors and translators
- Spearheaded project to migrate 500,000 invoices from an internally built
  accounting suite to ZohoBooks. Evaluated potential external accounting suites
  for suitability. Maintained record integrity of new transactions while
  actively migrating existing records.
- Refactored a 1.4 million line monolithic PHP application into smaller business
  contexts through the application of Domain Driven Design principles to create
  a hexagonal event-driven architecture.
- Practiced Scrum-based project management, management, unit testing, code
  reviews, and pairing to maintain team cohesion and project success

**Developer,** 44Interactive, Sioux Falls, SD 1/2013 -- 12/2014

- Developed a bespoke e-commerce platform using Laraval that featured inventory
  management, shopping carts, and credit card transactions through
  Authorize.net. Clients included local golf courses and country clubs who used
  our cart to process annual club memberships and tee-times.
- Completed the front-end development of and launched over 80 client websites.
  Front-end work included vanilla Javascript development of HTML5 drawing tools,
  interacting with API back-ends, and interfacing with Facebook, Google, and
  Cakemail APIs.
- Increased production system up-time from 97% to 99.99% on a server that saw
  50k+ unique visitors per day and reduced server costs by 50%

**Developer,** Gage E-Services, Sioux Falls, SD 7/2011 -- 1/2013

- Worked directly with clients to develop Joomla and Wordpress sites.

**Lead Park Ranger,** Jewel Cave National Monument, Custer, SD 5/2008 -- 9/2011
 
- Conducted interpretative programs of 90 minute public talks on cave geology.
- Mentored new rangers and assisted with training and performance evaluations.
- Edited, wrote, and designed layouts for full-color activity booklets, annual
  newspapers, advertisements, trail maps, and press releases
  
Skills
-------------------------------------------------------------------------------

**Back-End**
: PHP, Javascript (Nodejs), SQL, Shell, Python, Go

**Font-End**
: HTML, CSS & CSS pre-processors (Sass, Less), Javascript, Htmx, Bootstrap, and
Latex

**PHP Frameworks**
: Laraval, Zend Framework 1 & 2/3, and Slim

**API Integration**
:  Salesforce, Quickbooks, ZohoBooks, Google Maps, Paypal, Authorize.Net,
Worldpay, Elastic Search, Postman, ability to design and implement REST and
service-oriented APIs

**DevOps**
:  Terraform, AWS, Linux (native and WSL), Docker, Ansible, DataDog, NGINX and
Apache HTTP server administration, MySQL/MariaDB databases admin 

**Version Control**
: Git and SVN

**Application Security**
: OWASP, BURP Suite, various authentication methods (Basic, Digest, OAUTH, JWTs)

**Architecture**
: Test and Behavioral Driven Development (PHPUnit, Pest), Domain Driven Design,
design for distributed systems (microservice architectures, event and message
driven architectures, serverless), strong background in object orientated
programming, and database design. 

**Soft Skills**
: Excellent technical communication skills, familiarity with graphic design and
UI/UX, familiarity with common software development methodologies (Agile, Scrum,
etc.), git-flow, pair programming, code reviews, and work

Education
-------------------------------------------------------------------------------

**Real Time Interactive Simluation,** DigiPen Institute of Technology, 
Bellevue, WA

Courses Taken: Linear Algebra, Calculus I, Computer Environment I & II, 
Operating Systems I, C Programming Language, C++ Programming Language

**B.A. Philosophy and English**, Augustana College, Sioux Falls, SD, 2009

Graduated Magna Cum Laude, Dean's List (all semesters), Sigma Tau Delta Literary 
Honors Society

**Visiting Scholar**, Harris-Manchester College, University of Oxford

[Resume]: /static/hallenbeck_resume.pdf
[Github]: https://github.com/{{ site.github }}
