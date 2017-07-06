var post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
};

/*
Exercise 1

Locate the template by ID and compile it to a template function. Render the post to the body element using the function.
*/

/*
var postTemplate = Handlebars.compile($('#post').html());

$('body').append(postTemplate(post));
*/


/*
Exercise 2

Change your post object's body property to contain HTML elements as part of the string. Modify your Handlebars template to allow HTML to be output unescaped.
*/

post.body = '<p>' + post.body + '</p>';

/*
<script id="post" type="text/x-handlebars">
  <article>
    <h1>{{title}}</h1>
    <p><time>Posted on {{published}}</time></p>
    {{{body}}}
  </article>
</script>
*/


/*
Exercise 3

Add a property called tags on the post object that will be an array of strings to represent tags added to the blog post. Use the Handlebars each loop and path notation to output all tags for the post. For reference, specifically on path notation, check out the section "Handlebars Paths" of the website.
*/

post.tags = ['Food', 'Cooking', 'Vegetables'];

/*
<script id="post" type="text/x-handlebars">
  <article>
    <h1>{{title}}</h1>
    <p><time>Posted on {{published}}</time></p>
    {{{body}}}
  </article>
  <footer>
    <p>
      Tags:
      {{#each tags}}
      <strong>{{this}}</strong>
      {{/each}}
    </p>
  </footer>
</script>
*/


/*
Exercise 4

Create a separate template for the HTML element used to wrap each tag. Using the handlebars partial method, register the template as a partial using the name "tag" and replace the HTML for tags in the main template with a reference to the partial.
*/

/*
<script id="post" type="text/x-handlebars">
  <article>
    <h1>{{title}}</h1>
    <p><time>Posted on {{published}}</time></p>
    {{{body}}}
  </article>
  <footer>
    <p>
      Tags:
      {{#each tags}}
      {{> tag}}
      {{/each}}
    </p>
  </footer>
</script>

<script id="tag" type="text/x-handlebars">
  <strong>{{this}}</strong>
</script>
*/

Handlebars.registerPartial('tag', $('#tag').html());


/*
Exercise 5

Create a posts array, adding the existing post to it. Add a second post with no tags property. Modify your template to check for the existence of tags, and if none exist, output a "Not tagged" message. Wrap the template in an each loop to output each post.
*/

var post2 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
};

var posts = [];

posts.push(post, post2);

var postTemplate = Handlebars.compile($('#posts').html());

$('body').append(postTemplate({ posts: posts }))