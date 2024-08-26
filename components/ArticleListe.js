"use client";
function ArticleListe({ articles }) {
    return <div>
        {
            articles.map((article, index) =>
                <div key={index}>
                    <h2>
                        {article.title}
                    </h2>
                    <p>
                        {article.content}
                    </p>

                </div>
            )
        }
    </div>
}
export default ArticleListe; 