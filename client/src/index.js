import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

const json = [
    {
        "basics": {
            "name": "Joseph Fenderson",
            "label": "Junior Web Developer",
            "picture": "/client/images/profilePic.jpg",
            "email": "fenderson.joseph@gmail.com",
            "phone": "2053967054",
            "website": "In Progress",
            "location": {
                "address": "Fairfield",
                "postalCode": "35064",
                "city": "Fairfield",
                "state": "Alabama"
            },
            "profiles": [
                {
                    "network": "Facebook",
                    "username": "JosephFenderson",
                    "url": ""
                },
                {
                    "network": "Github",
                    "username": "JFenderson",
                    "url": "https://github.com/JFenderson"
                },
                {
                    "network": "LinkdIn",
                    "username": "Joseph Fenderson",
                    "url": ""
                }
            ]
        },
        "work":[
            {
                "company": "Sheraton Birmingham Hotel",
                "position": "Accounts Receivables Agent",
                "startDate": "2016-07",
                "endDate": "2018-01"
            },
            {
                "company": "Westin Birmingham Hotel",
                "position": "Night Auditor",
                "startDate": "2016-06",
                "endDate": "2016-01"
            },
            {
                "company": "Westin Birmingham Hotel",
                "position": "Welcome Ambassador",
                "startDate": "2015-07",
                "endDate": "2016-01"
            }
        ],
        "internship": [
            {
                "name": "Innovate Birmingham",
                "position": "Teacher's Assistant",
                "website": "https://innovatebirmingham.org",
                "startDate": "2018-04",
                "endDate": "2018-08"
            }
        ],
        "volunteer": [
            {
                "company": "STREAM Innovations",
                "position": "Teacher",
                "website": "https://streaminnovations.org",
                "startDate": "2018-06",
                "endDate": "2018-08"
            }
        ],
        "projects": [
            {
                "name": "",
                "decription": "",
                "technologies": ""
            },
            {
                "name": "",
                "decription": "",
                "technologies": ""
            },
            {
                "name": "",
                "decription": "",
                "technologies": ""
            },
            {
                "name": "",
                "decription": "",
                "technologies": ""
            },
            {
                "name": "",
                "decription": "",
                "technologies": ""
            },
            {
                "name": "",
                "decription": "",
                "technologies": ""
            },
            {
                "name": "",
                "decription": "",
                "technologies": ""
            },
            {
                "name": "",
                "decription": "",
                "technologies": ""
            },
            {
                "name": "",
                "decription": "",
                "technologies": ""
            }
        ],
        "education": [
            {
                "institution": "Miles College",
                "area": "Business Administration",
                "degree": "Bachelor of Science",
                "startDate": "2010-08",
                "endDate": "2015-05"
            },
            {
                "institution": "Innovate Birmingham",
                "area": "Full-Stack Web Development",
                "degree": "Certificate",
                "startDate": "2018-01",
                "endDate": "2018-04"
            }
        ],
        "skills": [
            {
                "name": "Front End Development",
                "level": "Junior",
                "keywords": [
                "HTML",
                "CSS",
                "JavaScript",
                "ES2015",
                "jQuery",
                "React",
                "SASS",
                "Babel",
                "Bootstrap",
                "Semantic UI",
                "Bootstrap",
                "Node",
                "MySQL",
                "Git",
                "Responsive"
                ]
            }
        ]
    }
]

ReactDOM.render(<App resume={json} />, document.getElementById('root'))