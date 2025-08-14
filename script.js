class WordPressThemeQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.questions = [
            {
                question: "どのような目的でウェブサイトを作りますか？",
                options: [
                    { text: "個人ブログ・日記", value: "blog" },
                    { text: "企業・ビジネスサイト", value: "business" },
                    { text: "ポートフォリオ・作品集", value: "portfolio" },
                    { text: "ECサイト・オンラインショップ", value: "ecommerce" }
                ]
            },
            {
                question: "デザインの好みはどちらですか？",
                options: [
                    { text: "シンプル・ミニマル", value: "minimal" },
                    { text: "モダン・スタイリッシュ", value: "modern" },
                    { text: "カラフル・ポップ", value: "colorful" },
                    { text: "エレガント・上品", value: "elegant" }
                ]
            },
            {
                question: "技術的なスキルレベルは？",
                options: [
                    { text: "初心者（HTMLなど分からない）", value: "beginner" },
                    { text: "少し経験あり（基本的なカスタマイズ可能）", value: "intermediate" },
                    { text: "上級者（コードを書ける）", value: "advanced" },
                    { text: "開発者（フルカスタマイズ可能）", value: "developer" }
                ]
            },
            {
                question: "予算はどれくらいですか？",
                options: [
                    { text: "2万円台", value: "low" },
                    { text: "3万円台", value: "medium" },
                    { text: "4万円以上", value: "high" },
                    { text: "費用は気にしない", value: "unlimited" }
                ]
            },
            {
                question: "重視する機能は？",
                options: [
                    { text: "SEO対策・検索エンジン最適化", value: "seo" },
                    { text: "表示速度・パフォーマンス", value: "speed" },
                    { text: "カスタマイズ性・柔軟性", value: "customization" },
                    { text: "サポート・アップデート", value: "support" }
                ]
            }
        ];
        
        this.themes = {
            "blog_minimal_beginner_free_seo": {
                name: "Muum",
                description: "様々なデザイン・レイアウトが構築できるブログ用WordPressテーマ",
                features: ["洗練されたブログデザイン", "多彩なレイアウト", "SEO対策済み", "レスポンシブ対応"],
                price: "¥25,800",
                image: "https://via.placeholder.com/300x200?text=Muum&color=4A90E2",
                link: "https://tcd-theme.com/tcd085"
            },
            "business_modern_intermediate_medium_speed": {
                name: "GENESIS",
                description: "最高な企業サイトが作成できるWordPressテーマ",
                features: ["最先端のコーポレートデザイン", "高速表示", "豊富なコンテンツ管理", "集客機能"],
                price: "¥34,800",
                image: "https://via.placeholder.com/300x200?text=GENESIS&color=2C3E50",
                link: "https://tcd-theme.com/tcd103"
            },
            "portfolio_elegant_advanced_high_customization": {
                name: "ARTISAN",
                description: "美しいギャラリーデザインのWordPressテーマ",
                features: ["美しいポートフォリオ表示", "ギャラリー機能", "作品管理システム", "カスタマイズ性"],
                price: "¥33,800",
                image: "https://via.placeholder.com/300x200?text=ARTISAN&color=8E44AD",
                link: "https://tcd-theme.com/tcd050"
            },
            "ecommerce_colorful_beginner_low_support": {
                name: "HARVES",
                description: "WooCommerce対応。ネットショップ作成用WordPressテーマ",
                features: ["WooCommerce完全対応", "商品管理機能", "決済システム連携", "在庫管理"],
                price: "¥33,800",
                image: "https://via.placeholder.com/300x200?text=HARVES&color=E74C3C",
                link: "https://tcd-theme.com/tcd065"
            },
            "blog_modern_intermediate_medium_seo": {
                name: "PANDORA",
                description: "最高の自社メディアを構築するWordPressテーマ",
                features: ["メディアサイト特化", "記事管理機能", "広告収益化", "SNS連携"],
                price: "¥32,800",
                image: "https://via.placeholder.com/300x200?text=PANDORA&color=27AE60",
                link: "https://tcd-theme.com/tcd114"
            },
            "business_elegant_advanced_high_customization": {
                name: "SOLARIS",
                description: "最先端テクノロジー企業を彷彿とさせるコーポレートサイト",
                features: ["最先端デザイン", "テクノロジー企業向け", "高度なアニメーション", "ブランディング"],
                price: "¥39,800",
                image: "https://via.placeholder.com/300x200?text=SOLARIS&color=34495E",
                link: "https://tcd-theme.com/tcd120"
            },
            "portfolio_colorful_beginner_low_speed": {
                name: "HORIZON",
                description: "横スクロールデザインで魅せる。個性派ギャラリーサイト",
                features: ["横スクロールデザイン", "個性的なレイアウト", "インパクト重視", "ユニークな表現"],
                price: "¥34,800",
                image: "https://via.placeholder.com/300x200?text=HORIZON&color=F39C12",
                link: "https://tcd-theme.com/tcd093"
            },
            "ecommerce_elegant_advanced_high_support": {
                name: "RIKYU",
                description: "あらゆるジャンルのネットショップが作成可能",
                features: ["多ジャンル対応", "高機能EC", "決済システム", "マーケティング機能"],
                price: "¥34,800",
                image: "https://via.placeholder.com/300x200?text=RIKYU&color=9B59B6",
                link: "https://tcd-theme.com/tcd108"
            }
        };
        
        this.init();
    }
    
    init() {
        this.renderQuestion();
        this.bindEvents();
        document.getElementById('total-questions').textContent = this.questions.length;
    }
    
    bindEvents() {
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
    }
    
    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <input type="radio" id="option-${index}" name="question-${this.currentQuestion}" value="${option.value}">
                <label for="option-${index}">${option.text}</label>
            `;
            optionsContainer.appendChild(optionElement);
            
            optionElement.addEventListener('click', () => {
                document.getElementById(`option-${index}`).checked = true;
                this.selectOption(option.value);
            });
        });
        
        if (this.answers[this.currentQuestion]) {
            const selectedOption = document.querySelector(`input[value="${this.answers[this.currentQuestion]}"]`);
            if (selectedOption) {
                selectedOption.checked = true;
            }
        }
        
        this.updateNavigationButtons();
    }
    
    selectOption(value) {
        this.answers[this.currentQuestion] = value;
        this.updateNavigationButtons();
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.questions.length - 1) {
            nextBtn.textContent = '結果を見る';
            nextBtn.disabled = !this.answers[this.currentQuestion];
        } else {
            nextBtn.textContent = '次の質問';
            nextBtn.disabled = !this.answers[this.currentQuestion];
        }
    }
    
    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
        } else {
            this.showResult();
        }
    }
    
    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    }
    
    showResult() {
        const recommendedTheme = this.calculateRecommendation();
        
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        
        document.getElementById('theme-name').textContent = recommendedTheme.name;
        document.getElementById('theme-description').textContent = recommendedTheme.description;
        document.getElementById('theme-price').textContent = recommendedTheme.price;
        document.getElementById('theme-image').src = recommendedTheme.image;
        document.getElementById('theme-image').alt = recommendedTheme.name;
        document.getElementById('theme-link').href = recommendedTheme.link;
        
        const featuresList = document.getElementById('theme-features-list');
        featuresList.innerHTML = '';
        recommendedTheme.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
    
    calculateRecommendation() {
        const [purpose, design, skill, budget, priority] = this.answers;
        
        let themeKey = `${purpose}_${design}_${skill}_${budget}_${priority}`;
        
        if (this.themes[themeKey]) {
            return this.themes[themeKey];
        }
        
        // 目的別の基本推奨
        if (purpose === 'blog') {
            if (priority === 'seo' && design === 'modern') {
                return this.themes["blog_modern_intermediate_medium_seo"];
            }
            return this.themes["blog_minimal_beginner_free_seo"];
        } else if (purpose === 'business') {
            if (design === 'elegant' && skill === 'advanced') {
                return this.themes["business_elegant_advanced_high_customization"];
            }
            return this.themes["business_modern_intermediate_medium_speed"];
        } else if (purpose === 'portfolio') {
            if (design === 'colorful' && skill === 'beginner') {
                return this.themes["portfolio_colorful_beginner_low_speed"];
            }
            return this.themes["portfolio_elegant_advanced_high_customization"];
        } else if (purpose === 'ecommerce') {
            if (design === 'elegant' && skill === 'advanced') {
                return this.themes["ecommerce_elegant_advanced_high_support"];
            }
            return this.themes["ecommerce_colorful_beginner_low_support"];
        }
        
        // デフォルト
        return this.themes["blog_minimal_beginner_free_seo"];
    }
    
    restart() {
        this.currentQuestion = 0;
        this.answers = [];
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('result-container').style.display = 'none';
        this.renderQuestion();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WordPressThemeQuiz();
});