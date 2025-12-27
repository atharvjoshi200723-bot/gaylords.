const axios = require('axios');
const API_URL = 'http://localhost:5001/api';

const reviews = [
    { name: "Aarav Sharma", rating: 5, comment: "Absolutely loved the burger! The best in Dehradun." },
    { name: "Diya Patel", rating: 4, comment: "Nice ambience and great coffee." },
    { name: "Vihaan Singh", rating: 5, comment: "The pineapple pastry is a childhood favorite." },
    { name: "Ananya Gupta", rating: 5, comment: "Quick service and tasty momos." },
    { name: "Rohan Verma", rating: 3, comment: "Good food but slightly crowded." },
    { name: "Ishita Kumar", rating: 5, comment: "Loved the chocolate truffle cake!" },
    { name: "Aditya Joshi", rating: 4, comment: "Decent place for snacks." },
    { name: "Kavya Reddy", rating: 5, comment: "The cold coffee with ice cream is a must-try." },
    { name: "Arjun Malhotra", rating: 4, comment: "Friendly staff and clean environment." },
    { name: "Sanya Kapoor", rating: 5, comment: "Best place for birthday treats." },
    { name: "Reyansh Mehta", rating: 4, comment: "Variety of options available." },
    { name: "Myra Saxena", rating: 5, comment: "Veg cheese sandwich is delicious." },
    { name: "Kabir Das", rating: 3, comment: "Okayish, nothing extraordinary." },
    { name: "Zara Khan", rating: 5, comment: "Highly recommend the sizzler." },
    { name: "Vivaan Nair", rating: 4, comment: "Good value for money." },
    { name: "Eva Jain", rating: 5, comment: "Fresh and hygienic food." },
    { name: "Dhruv Sinha", rating: 4, comment: "Love the outdoor seating vibe." },
    { name: "Kiara Bose", rating: 5, comment: "Perfect spot for evening snacks." },
    { name: "Advait Rao", rating: 3, comment: "Service could be faster." },
    { name: "Amaira Choudhury", rating: 5, comment: "The butterscotch pastry is divine." },
    { name: "Shaurya Pandey", rating: 4, comment: "Good place to hang out with friends." },
    { name: "Pari Agarwal", rating: 5, comment: "Amazing taste and quality." },
    { name: "Atharv Mishra", rating: 4, comment: "Nice place, will visit again." },
    { name: "Ira Thakur", rating: 5, comment: "The paneer burger is loaded!" },
    { name: "Vedant Deshmukh", rating: 4, comment: "Classic taste maintained over years." },
    { name: "Anvi Bhat", rating: 5, comment: "Simply the best bakery in town." },
    { name: "Ayaan Trivedi", rating: 3, comment: "Average experience." },
    { name: "Shanaya Roy", rating: 5, comment: "Loved the pasta!" },
    { name: "Yuvan Iyer", rating: 4, comment: "Good portions." },
    { name: "Meera Kulkarni", rating: 5, comment: "Always fresh and yummy." },
    { name: "Devansh Nanda", rating: 4, comment: "Nice collection of pastries." },
    { name: "Prisha Sen", rating: 5, comment: "My go-to place for comfort food." },
    { name: "Rudra Chopra", rating: 4, comment: "Tasty and affordable." },
    { name: "Aadhya Menon", rating: 5, comment: "Excellent service!" },
    { name: "Sai Krishna", rating: 3, comment: "Can improve on hygiene during rush hours." },
    { name: "Siya Chatterjee", rating: 5, comment: "The chocolate shake is thick and creamy." },
    { name: "Hridhaan Dutta", rating: 4, comment: "Good family restaurant." },
    { name: "Navya Kaul", rating: 5, comment: "Love the retro vibe." },
    { name: "Arush Sethi", rating: 4, comment: "Decent parking space available." },
    { name: "Jiya Khanna", rating: 5, comment: "Best patties in town." },
    { name: "Laksh Gill", rating: 4, comment: "Consistent taste." },
    { name: "Inaya Bedi", rating: 5, comment: "Superb quality." },
    { name: "Ranveer Suri", rating: 3, comment: "Coffee was a bit too sweet." },
    { name: "Tanisha Vohra", rating: 5, comment: "Everything is just perfect." },
    { name: "Aaryan Mittal", rating: 4, comment: "Good place for quick bites." },
    { name: "Kashvi Anand", rating: 5, comment: "Highly recommended!" },
    { name: "Samarth Goel", rating: 4, comment: "Nice ambiance." },
    { name: "Nitya Bajaj", rating: 5, comment: "Truly a gem of Dehradun." },
    { name: "Darsh Monga", rating: 4, comment: "Enjoyed the food." },
    { name: "Mishti Grover", rating: 5, comment: "Will definitely come back." }
];

const contactRequests = [
    { name: "Test User 1", email: "test1@example.com", message: "Do you take party orders?" },
    { name: "Test User 2", email: "test2@example.com", message: "Is home delivery available?" },
    { name: "Test User 3", email: "test3@example.com", message: "What are your opening hours?" },
    { name: "Test User 4", email: "test4@example.com", message: "Do you have vegan options?" },
    { name: "Test User 5", email: "test5@example.com", message: "Feedback regarding service." }
];

const runStressTest = async () => {
    console.log('Starting Stress Test...');

    // Post Reviews
    console.log('Posting 50 Reviews...');
    let reviewCount = 0;
    for (const review of reviews) {
        try {
            await axios.post(`${API_URL}/reviews`, review);
            process.stdout.write('.'); // Progress indicator
            reviewCount++;
        } catch (error) {
            console.error(`\nFailed to post review for ${review.name}: ${error.message}`);
        }
    }
    console.log(`\nSuccessfully posted ${reviewCount} reviews.`);

    // Post Contact Requests
    console.log('Posting 5 Contact Requests...');
    let contactCount = 0;
    for (const req of contactRequests) {
        try {
            await axios.post(`${API_URL}/contact`, req);
            process.stdout.write('.');
            contactCount++;
        } catch (error) {
            console.error(`\nFailed to post contact request for ${req.name}: ${error.message}`);
        }
    }
    console.log(`\nSuccessfully posted ${contactCount} contact requests.`);

    console.log('Stress Test Completed.');
};

runStressTest();
