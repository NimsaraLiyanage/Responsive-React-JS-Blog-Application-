import React from 'react'
import postAuthor from '../components/postAuthor'
import{Link} from 'react-router-dom'
import Thumbnail from '../images/blog8.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
     <div className="container post-detail_container">
        <div className="post-detail_header">
            <postAuthor/>
            <div className="post-detail_buttons">
              <Link to ={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
              <Link to ={`/posts/werwer/edit`} className='btn sm danger'>Delete</Link>
          
            </div>
        </div>
         <h1>This is the post title! </h1>
         <div className="post-detail_thumnail">
              <img src={Thumbnail} alt=""/>
         </div>
           <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea eaque aliquid dolorem recusandae porro earum laboriosam nam omnis, excepturi necessitatibus amet nisi nesciunt sit! Nihil reprehenderit maxime aliquid eius?
           </p>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi at voluptatem saepe odio voluptatibus sequi, voluptates, dicta deleniti quasi fugit, esse facere eum laboriosam. Voluptatibus laborum beatae esse eligendi?
           </p>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas, repudiandae cumque doloremque veniam dolorem dolorum rerum ratione beatae ipsa repellat! Quisquam, possimus odit. Natus obcaecati maxime modi impedit. Magnam ducimus, aperiam dolorum, placeat itaque provident suscipit earum dolorem amet iure maiores in deleniti illo tempora ex libero! Minus accusamus odio saepe quibusdam doloremque animi velit maiores porro commodi recusandae? Dignissimos dolorum odio consequatur quaerat animi eius, nemo eum soluta porro error quasi rem illo quae placeat doloribus minima, consequuntur asperiores ipsa. Aliquam laboriosam asperiores magnam veniam, porro voluptatibus fugiat unde aliquid repellat eaque sunt ex a architecto, consequatur suscipit hic aspernatur, adipisci mollitia totam aperiam perferendis in! Tenetur, odit ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione rem iste amet deserunt id quidem libero sapiente, consequuntur reprehenderit quo nemo repellendus voluptatibus, eligendi pariatur minima quam inventore! Explicabo, saepe molestias! Omnis, velit deserunt molestias ipsam blanditiis ea iste. Ad similique, explicabo illum voluptate, eligendi voluptatibus reprehenderit nemo id nesciunt error beatae porro? Quasi sit qui ipsa officiis impedit atque odio, nesciunt beatae. Esse accusamus fugit alias totam repellendus sint, amet dicta, quam inventore quod ipsam, ullam eum aspernatur molestias nulla reiciendis ipsa iusto tenetur a unde quis reprehenderit. Cupiditate eaque, blanditiis ullam facere error laudantium tempore unde, exercitationem deserunt praesentium maxime id iste placeat enim consequuntur? Veniam adipisci sunt animi non itaque quo? Veritatis impedit optio veniam rem, animi quisquam commodi sequi beatae molestiae consectetur quod odit nisi reiciendis ea temporibus ab sunt sit natus! Natus ad quia amet repudiandae rem aut provident cum? Reprehenderit ratione, harum nihil rem exercitationem atque. Dicta incidunt sint autem sequi rerum aut nihil quia libero molestias, perferendis soluta possimus, mollitia consequatur cumque exercitationem reiciendis inventore eveniet voluptates id dolore error suscipit sapiente dignissimos. Consectetur magni maiores est libero nesciunt, doloremque nostrum numquam exercitationem hic fuga iste officiis enim atque nisi! At, eligendi!
            </p>
            </div>
    </section>
  )
}

export default PostDetail