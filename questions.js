let rounds = [
    // Round 1: State of SaaS Management
    {title: "The State of SaaS Management",
    questions:[
        {
            question:
                "On average, how many SaaS Subscriptions do companies have?",
            options: ["12", "36", "52", "79"],
            answer: 1,
        },
        {
            question:
                "What % of companies have not reduced their SaaS spending over the last six months?",
            options: ["28%", "39%", "53%", "67%"],
            answer: 2,
        },
        {
            question:
                "What % of companies are planning to increase the number of SaaS Subscriptions they have over the next 6 months?",
            options: ["41%", "58%", "63%", "78%"],
            answer: 0,
        },
        {
            question:
                "Which tools are considered the most critical to businesses? Pick two.",
            options: [
                "Project Management",
                "IT & Security",
                "HR",
                "CRM",
            ],
            answer: [0,3],
        },
        {
            question:
                "Which are seen as the biggest benefits of SaaS subscriptions? Pick two.",
            options: [
                "Automation",
                "Scalability",
                "Employee Productivity",
                "Connectivity",
            ],
            answer: [1,2],
        },
        {
            question:
                "What % of organizations are continuously monitoring the different types of software they use?",
            options: ["31%", "46%", "65%", "78%"],
            answer: 0,
        },
        {
            question:
                "What % of respondents believe that all their SaaS subscriptions add value to their business?",
            options: ["32%", "47%", "61%", "74%"],
            answer: 1,
        },
        {
            question:
                "Which are seen as the biggest concerns of SaaS subscriptions? Pick two.",
            options: [
                "Duplicate Features",
                "Low Usage",
                "Implementation Time",
                "Security Risks",
            ],
            answer: [1,3],
        },
        {
            question:
                "Which is the principal reason to cut a software subscription?",
            options: [
                "Duplicate Features",
                "Low Usage",
                "Implementation Time",
                "Security Risks",
            ],
            answer: 0,
        },
        {
            question:
                "Which is the secondary reason to cut a software subscription?",
            options: [
                "Duplicate Features",
                "Low Usage",
                "Implementation Time",
                "Security Risks",
            ],
            answer: 1,
        },
        {
            question:
                "What % of respondents believe employees have SaaS subscriptions that they or senior management are unaware of?",
            options: ["27%", "35%", "43%", "51%"],
            answer: 2,
        },
        {
            question:
                "Which department is commonly responsible for approving SaaS Purchases?",
            options: ["HR", "Operations", "Finance", "IT"],
            answer: 3,
        },
        {
            question:
                "What % of respondents believe IT should be responsible for approving purchases?",
            options: ["32%", "48%", "62%", "79%"],
            answer: 1,
        },
        {
            question:
                "What % of respondents had to chase employees to reconcile SaaS payments in the last six months?",
            options: ["15%", "22%", "29%", "34%"],
            answer: 2,
        },
        {
            question:
                "How many hours are wasted each month on manual software tasks?",
            options: ["9", "15", "21", "30"],
            answer: 1,
        },
        {
            question:
                "How much software spend is wasted each month on duplicate, unused subscriptions?",
            options: ["15%", "30%", "45%", "60%"],
            answer: 1,
        },
        {
            question:
                "What % of respondents agree that poor SaaS Management causes tension between Finance & other teams?",
            options: ["35%", "45%", "55%", "65%"],
            answer: 3,
        },
    ]}, 
    // Round 2: The AI Landscape Boom
    {title: "The AI Landscape Boom",
    questions:[
        {
            question:
                "Year-On-Year what is the growth rate of spend on AI tools?",
            options: ["98%", "133%", "171%", "227%"],
            answer: 2,
        },
        {
            question:
                "How much software spend each month is dedicated to AI tools?",
            options: ["0.48%", "0.55%", "0.63%", "0.79%"],
            answer: 3,
        },
        {
            question:
                "What is the median ACV (annual customer value) for AI tools?",
            options: ["$1,246", "$4,812", "$7,820", "$10,515"],
            answer: 0,
        },
        {
            question: "What % of AI vendors have less than 50 employees?",
            options: ["14.3%", "32.9%", "47.8%", "55.3%"],
            answer: 3,
        },
        {
            question: "What % of AI vendors have less than $10M Funding?",
            options: ["54.0%", "62.4%", "69.9%", "74.6%"],
            answer: 0,
        },
        {
            question: "What % of AI vendors have more than 1,000 employees?",
            options: ["0.6%", "0.9%", "1.3%", "1.7%"],
            answer: 1,
        },
        {
            question: "What % of AI vendors have raised more than $100M?",
            options: ["1.9%", "3.4%", "4.7%", "6.8%"],
            answer: 0,
        },
        {
            question: "What % of AI vendors are based in the US?",
            options: ["58%", "64%", "77%", "84%"],
            answer: 0,
        },
        {
            question:
                "Which department has seen the fastest adoption of AI Tools?",
            options: ["Engineering", "Sales", "Productivity", "Marketing"],
            answer: 3,
        },
        {
            question:
                "Which of these SaaS products is in our Top 20 bought AI Tools?",
            options: ["Lavender", "OpenAI", "CopyAI", "Gong"],
            answer: 3,
        },
    ]}, 
    // Round 3: Q1 SaaS Specifics
    {title: "Q1 SaaS Specifics",
    questions:[
        {
            question:
                "At the end of 2022, how much capital was left for VCs to invest?",
            options: ["$580B", "$620B", "$660B", "$720B"],
            answer: 0,
        },
        {
            question: "Year-on-Year how much has VC investment declined by?",
            options: ["39%", "46%", "53%", "62%"],
            answer: 2,
        },
        {
            question: "Did the SaaS Market experience growth Q1 '23 over Q4 '22?",
            options: ["Yes", "No"],
            answer: 0,
            bis:
            {
                question: "By how much?",
                options: ["4.1%", "4.9%", "5.3%", "6.7%"],
                answer: 3,
            },
        },
        {
            question:
                "Did the SaaS Market experience growth March '23 over February '23?",
            options: ["Yes", "No"],
            answer: 0,
            bis:
            {
                question: "By how much?",
                options: ["1.2%", "1.7%", "2.2%", "2.7%"],
                answer: 1,
            },
        },
        {
            question:
                "Did the SaaS Market experience growth March '23 over March '22?",
            options: ["Yes", "No"],
            answer: 0,
            bis:
            {
                question: "By how much?",
                options: ["26%", "31%", "37%", "45%"],
                answer: 2,
            },
        },
        {
            question:
                "Which Category saw the biggest increase in Year-on-Year spend?",
            options: [
                "Productivity",
                "IT Security",
                "Customer Success",
                "Design",
            ],
            answer: 3,
            bis:
            {
                question: "By how much?",
                options: ["122%", "146%", "168%", "197%"],
                answer: 1,
            },
        },
        {
            question:
                "Which Category saw the biggest decrease in Year-on-Year spend?",
            options: ["Finance", "Marketing", "Sales", "Operations"],
            answer: 3,
            bis:
            {
                question: "By how much?",
                options: ["-44%", "-49%", "-53%", "-58%"],
                answer: 0,
            },
        },
        {
            question:
                "Of the Top 10 New Apps in March 2023, how many has AI features?",
            options: ["2", "4", "6", "8"],
            answer: 1,
        },
    ]}
];