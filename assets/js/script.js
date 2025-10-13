const teamData = {
            harshala: {
                name: "Harshala Jadhav",
                title: "Co-Founder & Head of FinOps",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
                about: "Harshala is an agile and dynamic finance leader with over 15 years of hands-on experience in accounting, compliance, MIS, and shared service operations. At Execuler, she leads the FinOps division — where financial accuracy meets intelligent automation. Her deep expertise across industries and geographies helps clients achieve clarity, compliance, and control over their financial operations. Harshala's strategic vision lies in turning financial complexity into streamlined, data-driven systems that scale with confidence.",
                expertise: [
                    "End-to-End Accounting & Financial Reporting",
                    "Bank, Vendor & Fund Flow Management",
                    "Financial Dashboards & Data Analytics",
                    "Shared Service Centre Leadership & SOP Implementation",
                    "Process Optimization & AI-Driven Automation"
                ],
                approach: "Harshala believes finance is not just about numbers — it's about narrative and predictability. Her approach blends precision with innovation, using AI tools and automated workflows to deliver real-time insights, reduce operational friction, and enhance decision-making power for founders and CFOs alike.",
                personalNote: "Clear numbers create confident growth.",
                linkedin: "#",
                email: "harshala.jadhav@execuler.com"
            },
            sana: {
                name: "Sana Shaikh",
                title: "Co-Founder & Head of Client Success",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
                about: "Sana is an enthusiastic and result-driven finance professional with over 15 years of experience across accounting, process automation, and client operations. As the Head of Client Success at Execuler, she champions efficiency, transparency, and partnership excellence. Sana bridges operational depth with client empathy, ensuring every engagement delivers measurable results and a seamless experience powered by AI and smart systems.",
                expertise: [
                    "Financial Planning, Budgeting & Forecasting",
                    "Month-End Close & Reporting Automation",
                    "ERP & Finance System Implementation",
                    "Process Optimization & Continuous Improvement",
                    "Client Relationship Management & Delivery Excellence"
                ],
                approach: "Sana's leadership philosophy centers on proactive collaboration — ensuring that every client interaction transforms into tangible value. She leverages automation, analytics, and structured SOPs to create predictable outcomes, build trust, and drive long-term partnerships rooted in execution and reliability.",
                personalNote: "Every client success story is a reflection of our execution.",
                linkedin: "#",
                email: "sana.shaikh@execuler.com"
            }
        };

        function openModal(person) {
            const data = teamData[person];
            const modalBody = document.getElementById('modalBody');
            
            const expertiseList = data.expertise.map(item => `<li>${item}</li>`).join('');
            
            modalBody.innerHTML = '<div class="profile-header">' +
                    '<div class="profile-image">' +
                        '<img src="' + data.image + '" alt="' + data.name + '">' +
                    '</div>' +
                    '<div class="profile-info">' +
                        '<h3>' + data.name + '</h3>' +
                        '<p class="title">' + data.title + '</p>' +
                        '<div class="social-links">' +
                            '<a href="' + data.linkedin + '" target="_blank">' +
                                '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">' +
                                    '<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>' +
                                '</svg>' +
                                'LinkedIn' +
                            '</a>' +
                            '<a href="mailto:' + data.email + '">' +
                                '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">' +
                                    '<path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>' +
                                '</svg>' +
                                'Email' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="section">' +
                    '<h4>About</h4>' +
                    '<p>' + data.about + '</p>' +
                '</div>' +
                '<div class="section">' +
                    '<h4>Core Expertise</h4>' +
                    '<ul class="expertise-list">' +
                        expertiseList +
                    '</ul>' +
                '</div>' +
                '<div class="section">' +
                    '<h4>Approach</h4>' +
                    '<p>' + data.approach + '</p>' +
                '</div>' +
                '<div class="personal-note">' +
                    '"' + data.personalNote + '"' +
                '</div>';
            
            document.getElementById('modalOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function closeModalOnOverlay(event) {
            if (event.target.id === 'modalOverlay') {
                closeModal();
            }
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });