import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import SearchResult from './SearchResult';

export default class SearchResults extends React.Component {

    render() {

        const results = [
            {
                jobkey: 'e76ab41e145ff8fa',
                jobtitle: 'AX Programmer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'Responsibilities: Provide technical/user support on inhouse applications where needed Provide Planning and project implementation, Organization of project',
                url: 'http://www.indeed.com.sg/viewjob?jk=e76ab41e145ff8fa&qd=gJP2krtArmreCZrJTbM5qqpvu70Kw4ER_MfdJuSmbBxo6TykwhCNPL_VkbN0nC9J-YvwIt8D-UDEsvGbt3RcCzVW7hpL10f-2_O7Bv4Homs&indpubnum=6839350670943140&atk=1aq120rlnbs4jeu0',
                date: 'Sun, 24 Jul 2016 08:21:42 GMT'
            },
            {
                jobkey: 'bed69fde4a6bbcd0',
                jobtitle: 'Application Engineer',
                company: 'Rakuten, Inc.',
                formattedLocationFull: 'Singapore',
                snippet: 'Expert level of Java, JSP and Tomcat. The individual will be tasked as a developer and maintainer of Web Application (ex....',
                url: 'http://www.indeed.com.sg/viewjob?jk=bed69fde4a6bbcd0&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Wed, 27 Apr 2016 09:58:51 GMT'
            },
            {
                jobkey: 'e227f7a81acf9bf2',
                jobtitle: 'Security Engineer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'JOB REQUIREMENT As an Identity and Access Management (IAM) Consultant / Security Engineer with AdNovum, you will work on a challenging and rich variety of',
                url: 'http://www.indeed.com.sg/viewjob?jk=e227f7a81acf9bf2&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Sun, 08 May 2016 05:45:01 GMT'
            },
            {
                jobkey: 'e76ab41e145ff8fa',
                jobtitle: 'AX Programmer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'Responsibilities: Provide technical/user support on inhouse applications where needed Provide Planning and project implementation, Organization of project',
                url: 'http://www.indeed.com.sg/viewjob?jk=e76ab41e145ff8fa&qd=gJP2krtArmreCZrJTbM5qqpvu70Kw4ER_MfdJuSmbBxo6TykwhCNPL_VkbN0nC9J-YvwIt8D-UDEsvGbt3RcCzVW7hpL10f-2_O7Bv4Homs&indpubnum=6839350670943140&atk=1aq120rlnbs4jeu0',
                date: 'Sun, 24 Jul 2016 08:21:42 GMT'
            },
            {
                jobkey: 'bed69fde4a6bbcd0',
                jobtitle: 'Application Engineer',
                company: 'Rakuten, Inc.',
                formattedLocationFull: 'Singapore',
                snippet: 'Expert level of Java, JSP and Tomcat. The individual will be tasked as a developer and maintainer of Web Application (ex....',
                url: 'http://www.indeed.com.sg/viewjob?jk=bed69fde4a6bbcd0&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Wed, 27 Apr 2016 09:58:51 GMT'
            },
            {
                jobkey: 'e227f7a81acf9bf2',
                jobtitle: 'Security Engineer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'JOB REQUIREMENT As an Identity and Access Management (IAM) Consultant / Security Engineer with AdNovum, you will work on a challenging and rich variety of',
                url: 'http://www.indeed.com.sg/viewjob?jk=e227f7a81acf9bf2&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Sun, 08 May 2016 05:45:01 GMT'
            },
            {
                jobkey: 'e76ab41e145ff8fa',
                jobtitle: 'AX Programmer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'Responsibilities: Provide technical/user support on inhouse applications where needed Provide Planning and project implementation, Organization of project',
                url: 'http://www.indeed.com.sg/viewjob?jk=e76ab41e145ff8fa&qd=gJP2krtArmreCZrJTbM5qqpvu70Kw4ER_MfdJuSmbBxo6TykwhCNPL_VkbN0nC9J-YvwIt8D-UDEsvGbt3RcCzVW7hpL10f-2_O7Bv4Homs&indpubnum=6839350670943140&atk=1aq120rlnbs4jeu0',
                date: 'Sun, 24 Jul 2016 08:21:42 GMT'
            },
            {
                jobkey: 'bed69fde4a6bbcd0',
                jobtitle: 'Application Engineer',
                company: 'Rakuten, Inc.',
                formattedLocationFull: 'Singapore',
                snippet: 'Expert level of Java, JSP and Tomcat. The individual will be tasked as a developer and maintainer of Web Application (ex....',
                url: 'http://www.indeed.com.sg/viewjob?jk=bed69fde4a6bbcd0&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Wed, 27 Apr 2016 09:58:51 GMT'
            },
            {
                jobkey: 'e227f7a81acf9bf2',
                jobtitle: 'Security Engineer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'JOB REQUIREMENT As an Identity and Access Management (IAM) Consultant / Security Engineer with AdNovum, you will work on a challenging and rich variety of',
                url: 'http://www.indeed.com.sg/viewjob?jk=e227f7a81acf9bf2&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Sun, 08 May 2016 05:45:01 GMT'
            },
            {
                jobkey: 'e76ab41e145ff8fa',
                jobtitle: 'AX Programmer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'Responsibilities: Provide technical/user support on inhouse applications where needed Provide Planning and project implementation, Organization of project',
                url: 'http://www.indeed.com.sg/viewjob?jk=e76ab41e145ff8fa&qd=gJP2krtArmreCZrJTbM5qqpvu70Kw4ER_MfdJuSmbBxo6TykwhCNPL_VkbN0nC9J-YvwIt8D-UDEsvGbt3RcCzVW7hpL10f-2_O7Bv4Homs&indpubnum=6839350670943140&atk=1aq120rlnbs4jeu0',
                date: 'Sun, 24 Jul 2016 08:21:42 GMT'
            },
            {
                jobkey: 'bed69fde4a6bbcd0',
                jobtitle: 'Application Engineer',
                company: 'Rakuten, Inc.',
                formattedLocationFull: 'Singapore',
                snippet: 'Expert level of Java, JSP and Tomcat. The individual will be tasked as a developer and maintainer of Web Application (ex....',
                url: 'http://www.indeed.com.sg/viewjob?jk=bed69fde4a6bbcd0&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Wed, 27 Apr 2016 09:58:51 GMT'
            },
            {
                jobkey: 'e227f7a81acf9bf2',
                jobtitle: 'Security Engineer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'JOB REQUIREMENT As an Identity and Access Management (IAM) Consultant / Security Engineer with AdNovum, you will work on a challenging and rich variety of',
                url: 'http://www.indeed.com.sg/viewjob?jk=e227f7a81acf9bf2&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Sun, 08 May 2016 05:45:01 GMT'
            },
            {
                jobkey: 'e76ab41e145ff8fa',
                jobtitle: 'AX Programmer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'Responsibilities: Provide technical/user support on inhouse applications where needed Provide Planning and project implementation, Organization of project',
                url: 'http://www.indeed.com.sg/viewjob?jk=e76ab41e145ff8fa&qd=gJP2krtArmreCZrJTbM5qqpvu70Kw4ER_MfdJuSmbBxo6TykwhCNPL_VkbN0nC9J-YvwIt8D-UDEsvGbt3RcCzVW7hpL10f-2_O7Bv4Homs&indpubnum=6839350670943140&atk=1aq120rlnbs4jeu0',
                date: 'Sun, 24 Jul 2016 08:21:42 GMT'
            },
            {
                jobkey: 'bed69fde4a6bbcd0',
                jobtitle: 'Application Engineer',
                company: 'Rakuten, Inc.',
                formattedLocationFull: 'Singapore',
                snippet: 'Expert level of Java, JSP and Tomcat. The individual will be tasked as a developer and maintainer of Web Application (ex....',
                url: 'http://www.indeed.com.sg/viewjob?jk=bed69fde4a6bbcd0&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Wed, 27 Apr 2016 09:58:51 GMT'
            },
            {
                jobkey: 'e227f7a81acf9bf2',
                jobtitle: 'Security Engineer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'JOB REQUIREMENT As an Identity and Access Management (IAM) Consultant / Security Engineer with AdNovum, you will work on a challenging and rich variety of',
                url: 'http://www.indeed.com.sg/viewjob?jk=e227f7a81acf9bf2&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Sun, 08 May 2016 05:45:01 GMT'
            },
            {
                jobkey: 'e76ab41e145ff8fa',
                jobtitle: 'AX Programmer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'Responsibilities: Provide technical/user support on inhouse applications where needed Provide Planning and project implementation, Organization of project',
                url: 'http://www.indeed.com.sg/viewjob?jk=e76ab41e145ff8fa&qd=gJP2krtArmreCZrJTbM5qqpvu70Kw4ER_MfdJuSmbBxo6TykwhCNPL_VkbN0nC9J-YvwIt8D-UDEsvGbt3RcCzVW7hpL10f-2_O7Bv4Homs&indpubnum=6839350670943140&atk=1aq120rlnbs4jeu0',
                date: 'Sun, 24 Jul 2016 08:21:42 GMT'
            },
            {
                jobkey: 'bed69fde4a6bbcd0',
                jobtitle: 'Application Engineer',
                company: 'Rakuten, Inc.',
                formattedLocationFull: 'Singapore',
                snippet: 'Expert level of Java, JSP and Tomcat. The individual will be tasked as a developer and maintainer of Web Application (ex....',
                url: 'http://www.indeed.com.sg/viewjob?jk=bed69fde4a6bbcd0&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Wed, 27 Apr 2016 09:58:51 GMT'
            },
            {
                jobkey: 'e227f7a81acf9bf2',
                jobtitle: 'Security Engineer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'JOB REQUIREMENT As an Identity and Access Management (IAM) Consultant / Security Engineer with AdNovum, you will work on a challenging and rich variety of',
                url: 'http://www.indeed.com.sg/viewjob?jk=e227f7a81acf9bf2&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Sun, 08 May 2016 05:45:01 GMT'
            },
            {
                jobkey: 'e76ab41e145ff8fa',
                jobtitle: 'AX Programmer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'Responsibilities: Provide technical/user support on inhouse applications where needed Provide Planning and project implementation, Organization of project',
                url: 'http://www.indeed.com.sg/viewjob?jk=e76ab41e145ff8fa&qd=gJP2krtArmreCZrJTbM5qqpvu70Kw4ER_MfdJuSmbBxo6TykwhCNPL_VkbN0nC9J-YvwIt8D-UDEsvGbt3RcCzVW7hpL10f-2_O7Bv4Homs&indpubnum=6839350670943140&atk=1aq120rlnbs4jeu0',
                date: 'Sun, 24 Jul 2016 08:21:42 GMT'
            },
            {
                jobkey: 'bed69fde4a6bbcd0',
                jobtitle: 'Application Engineer',
                company: 'Rakuten, Inc.',
                formattedLocationFull: 'Singapore',
                snippet: 'Expert level of Java, JSP and Tomcat. The individual will be tasked as a developer and maintainer of Web Application (ex....',
                url: 'http://www.indeed.com.sg/viewjob?jk=bed69fde4a6bbcd0&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Wed, 27 Apr 2016 09:58:51 GMT'
            },
            {
                jobkey: 'e227f7a81acf9bf2',
                jobtitle: 'Security Engineer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'JOB REQUIREMENT As an Identity and Access Management (IAM) Consultant / Security Engineer with AdNovum, you will work on a challenging and rich variety of',
                url: 'http://www.indeed.com.sg/viewjob?jk=e227f7a81acf9bf2&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Sun, 08 May 2016 05:45:01 GMT'
            },
            {
                jobkey: 'e76ab41e145ff8fa',
                jobtitle: 'AX Programmer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'Responsibilities: Provide technical/user support on inhouse applications where needed Provide Planning and project implementation, Organization of project',
                url: 'http://www.indeed.com.sg/viewjob?jk=e76ab41e145ff8fa&qd=gJP2krtArmreCZrJTbM5qqpvu70Kw4ER_MfdJuSmbBxo6TykwhCNPL_VkbN0nC9J-YvwIt8D-UDEsvGbt3RcCzVW7hpL10f-2_O7Bv4Homs&indpubnum=6839350670943140&atk=1aq120rlnbs4jeu0',
                date: 'Sun, 24 Jul 2016 08:21:42 GMT'
            },
            {
                jobkey: 'bed69fde4a6bbcd0',
                jobtitle: 'Application Engineer',
                company: 'Rakuten, Inc.',
                formattedLocationFull: 'Singapore',
                snippet: 'Expert level of Java, JSP and Tomcat. The individual will be tasked as a developer and maintainer of Web Application (ex....',
                url: 'http://www.indeed.com.sg/viewjob?jk=bed69fde4a6bbcd0&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Wed, 27 Apr 2016 09:58:51 GMT'
            },
            {
                jobkey: 'e227f7a81acf9bf2',
                jobtitle: 'Security Engineer',
                company: 'eb21',
                formattedLocationFull: 'Singapore',
                snippet: 'JOB REQUIREMENT As an Identity and Access Management (IAM) Consultant / Security Engineer with AdNovum, you will work on a challenging and rich variety of',
                url: 'http://www.indeed.com.sg/viewjob?jk=e227f7a81acf9bf2&qd=gJP2krtArmreCZrJTbM5qm6DTT3RGe5wbYr8CT4DCrT-NF-90xUJ-sxt9SD3Kdf9xGDvV3LNwAKrSeIVwQG3LKm1Aj3izkOw87NHJgxznYA&indpubnum=6839350670943140&atk=1aq10kiqdbs4j9r4',
                date: 'Sun, 08 May 2016 05:45:01 GMT'
            }
        ];

        return (
           <Grid>
               {results.map(function(result) {
                   return <SearchResult result={result}/>;
               })}
           </Grid>
        );
    }
}