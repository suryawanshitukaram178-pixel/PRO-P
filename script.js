 const body = document.body;
        const colorCode = document.getElementById('colorCode');
        const colorButtons = document.querySelectorAll('.color-btn');
        const randomBtn = document.getElementById('randomBtn');
        const copyNotification = document.getElementById('copyNotification');

        // Preset gradients
        const gradients = [
            'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'linear-gradient(135deg, #fad961 0%, #f76b1c 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            'linear-gradient(135deg, #f77062 0%, #fe5196 100%)',
            'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
            'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
        ];

        // Extract color from gradient
        function extractColorFromGradient(gradient) {
            // Extract the first hex color from the gradient
            const match = gradient.match(/#[0-9a-fA-F]{6}/);
            return match ? match[0] : '#667eea';
        }

        // Change background color
        function changeBackground(gradient) {
            body.style.background = gradient;
            const color = extractColorFromGradient(gradient);
            colorCode.textContent = color;
            
            // Add a pulse animation to the color code
            colorCode.style.transform = 'scale(1.2)';
            setTimeout(() => {
                colorCode.style.transform = 'scale(1)';
            }, 200);
        }

        // Color button clicks
        colorButtons.forEach(button => {
            button.addEventListener('click', () => {
                const gradient = button.getAttribute('data-gradient');
                changeBackground(gradient);
            });
        });

        // Random color generator
        function generateRandomGradient() {
            const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
            changeBackground(randomGradient);
        }

        randomBtn.addEventListener('click', () => {
            generateRandomGradient();
            
            // Add a spin animation to the button
            randomBtn.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                randomBtn.style.transform = 'rotate(0deg)';
            }, 500);
        });

        // Click on color code to copy
        colorCode.addEventListener('click', () => {
            const colorText = colorCode.textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(colorText).then(() => {
                // Show notification
                copyNotification.classList.add('show');
                
                // Hide notification after 2 seconds
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });

        // Smooth transition for color code
        colorCode.style.transition = 'transform 0.2s ease';