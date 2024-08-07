document.addEventListener('DOMContentLoaded', () => {
    const articles = [
	{
            title: 'OAuth 2.0 Resource Server JWT',
            description: 'The goal of this project is to leverage Spring\'s inbuilt security feature to secure a spring boot application using JWT.',
            tags: ['Java','Spring Boot','Security'],
            githubLink: 'https://github.com/AmritcsAdhikari/Jwt-oauth2-resource-server', 
            blogLink: '' // No blog link
        },
	{
            title: 'OpenAPI Documentation: OAuth 2.0 Resource Server JWT',
            description: 'The goal of this project is to generate a visual document from OpenAPI specification that helps visualize and test the REST APIs. .',
            tags: ['Java','Spring Boot','Security'],
            githubLink: 'https://github.com/AmritcsAdhikari/Spring-Security-API-Documentation', 
            blogLink: '' // No blog link
        },
        {
            title: 'Understanding Java Records',
            description: 'A comprehensive guide to understanding Java Record Class and its applications.',
            tags: ['Java'],
            githubLink: '',
            blogLink: 'https://medium.com/@amritcsadhikari/understanding-java-records-727f98d05456'
        },
        {
            title: 'Sending Emails with Spring Boot: Comprehensive Guide',
            description: 'A beginner-friendly guide to sending emails using a spring boot application. The goal of this project is to expose a few rest endpoints for sending an email using spring-boot-starter-mail which internally uses JavaMailSender interface covering different email body types: Plain Text, Template, HTML, Attachment.',
            tags: ['Java','Spring Boot'],
            githubLink: 'https://github.com/AmritcsAdhikari/Sending-Email-Spring-Boot',
            blogLink: '' // No blog link
        },
       
     {
        title: 'Mastering JavaScript: The Definitive Guide for Developers',
        description: 'A thorough exploration of JavaScript fundamentals, advanced topics, and best practices for developers.',
        tags: ['JavaScript', 'Programming', 'Web Development'],
        githubLink: 'https://github.com/your-repo/js-guide',
        blogLink: 'https://your-blog.com/js-guide'
    },
    {
        title: 'Building RESTful APIs with Node.js and Express',
        description: 'Step-by-step instructions for creating efficient RESTful APIs using Node.js and the Express framework.',
        tags: ['Node.js', 'API'],
        githubLink: 'https://github.com/your-repo/node-api',
        blogLink: 'https://your-blog.com/node-api'
    },
    {
        title: 'Introduction to Machine Learning with Python',
        description: 'An introductory guide to machine learning concepts, algorithms, and implementation using Python programming language.',
        tags: ['Machine Learning', 'Python', 'Data Science'],
        githubLink: 'https://github.com/your-repo/ml-python',
        blogLink: 'https://your-blog.com/ml-python'
    },
    {
        title: 'Responsive Web Design: Techniques and Best Practices',
        description: 'Learn how to create responsive web designs that look great on all devices and screen sizes.',
        tags: ['Web Design', 'CSS', 'Responsive'],
        githubLink: 'https://github.com/your-repo/responsive-design',
        blogLink: 'https://your-blog.com/responsive-design'
    },
    {
        title: 'Getting Started with React: A Beginner\'s Guide',
        description: 'A comprehensive guide for beginners to get started with React and build dynamic web applications.',
        tags: ['React'],
        githubLink: 'https://github.com/your-repo/react-guide',
        blogLink: 'https://your-blog.com/react-guide'
    },
     // Add more articles as needed
    ];

    const articleContainer = document.getElementById('article-container');
    const tagFiltersContainer = document.getElementById('tag-filters');
    
    // Function to create and display articles
    function displayArticles(articles) {
        articleContainer.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.setAttribute('data-tags', article.tags.join(', '));
            
            articleElement.innerHTML = `
                <h4>${article.title}</h4>
                <p>${article.description}</p>
                <div class="tags">
                    ${article.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="links">
                    ${article.githubLink ? `<a href="${article.githubLink}" class="link" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    ${article.blogLink ? `<a href="${article.blogLink}" class="link" target="_blank"><i class="fas fa-book"></i></a>` : ''}
                </div>
            `;
            articleContainer.appendChild(articleElement);
        });
    }

    // Function to extract unique tags from articles
    function extractTags() {
        const tags = new Set();
        articles.forEach(article => {
            article.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    }

    // Function to create filter checkboxes
    function createTagFilters(tags) {
        tagFiltersContainer.innerHTML = '';
        tags.forEach(tag => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `tag-${tag}`;
            checkbox.value = tag;

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = tag;

            tagFiltersContainer.appendChild(checkbox);
            tagFiltersContainer.appendChild(label);
        });
    }

    // Function to filter articles based on selected tags
    function filterArticles() {
        const selectedTags = Array.from(tagFiltersContainer.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

        document.querySelectorAll('.article').forEach(article => {
            const articleTags = article.getAttribute('data-tags').split(', ');
            const matches = selectedTags.length === 0 || selectedTags.every(tag => articleTags.includes(tag));
            article.classList.toggle('hidden', !matches);
        });
    }

    // Initialize the page
    const tags = extractTags();
    createTagFilters(tags);
    displayArticles(articles);

    // Add event listeners for filter checkboxes
    tagFiltersContainer.addEventListener('change', filterArticles);

    // Initial filter application
    filterArticles();
});
