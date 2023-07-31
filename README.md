<div align="center">
    <h1>Recipe App</h1>
    <br>
  <h3>Tools Used</h3>
<table>
  <tr>
    <th><a href="https://nextjs.org/">Next.js</a></th>
    <th><a href="https://www.sanity.io/">Sanity</a></th>
    <th><a href="https://tailwindcss.com/">Tailwind</a></th>
    <th><a href="https://vercel.com/">Vercel</a></th>
  </tr>
  <tr>
    <td align="center"><a href="https://nextjs.org/"><img src="https://github.com/yousefelassal/recipe-app/assets/76617202/1dd1f8a5-1510-4669-871d-d6a1319d9bae" width="50px" height="50px"></a></td>
    <td align="center"><a href="https://www.sanity.io/"><img src="https://github.com/yousefelassal/recipe-app/assets/76617202/0b9c8a51-7dde-4695-8f80-42811d2442a3" width="50px" height="50px"></a></td>
    <td align="center"><a href="https://tailwindcss.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width="50px" height="50px"></a></td>
    <td align="center"><a href="https://vercel.com/"><img src="https://logowik.com/content/uploads/images/vercel1868.jpg" width="70px" height="50px"></a></td>
  </tr>
  <tr>
    <td align="center">Web Framework</td>
    <td align="center">Headless CMS</td>
    <td align="center">CSS Framework</td>
    <td align="center">Deployment Environment</td>
  </tr>
</table>
    <br>

<h3><code>/studio</code></h3>
<p>Content is managed within the app through Sanity Studio</p>
<img width="639" alt="studio-img" src="https://github.com/yousefelassal/recipe-app/assets/76617202/dcf11f90-9712-4203-b9c5-ccedaace590a">
<br>
<div align="left">
<br>

<h3>Blog schema</h3>
<p>The schema used to display the blog page shown in the studio</p>

```js
{
    name: 'blog',
    title: 'Blogs',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Blog Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name:"author",
            title:"Author",
            type:"reference",
            to:[{type:"chef"}],
        },
        {
            name: "image",
            title: "Blog Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: 'content',
            title: 'Blog Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}
```

</div
    
</div>

