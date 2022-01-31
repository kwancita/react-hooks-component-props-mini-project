import Article from "./Article"

function ArticleList({posts}) {
    const post = posts.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    })
    return (
        <div>
            <main>
                {post}
            </main>
        </div>
    )
}

export default ArticleList
