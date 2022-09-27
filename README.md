Este é um projeto [Next.js](https://nextjs.org/) criado utilizando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Abordagem de desenvolvimento

Neste projeto busco mostrar alguns conceitos básicos de SEO, portanto alguns conceitos foram utilizados, como a utilização de meta tags [The Open Graph Protocol](https://ogp.me/), melhoria nas urls de busca(ao selecionar um anime, a tag engloba tanto o slug quanto o id).

A Página inicial foi pensada para mostrar em destaque os animes que estão em alta, dessa forma, além das chances do usuário se interessar e continuar no site serem maiores, também ajuda na otimização da pesquisa, já que muitas palavras chaves de animes famosos estarão ali, mas, caso o usuário não encontre o que deseja, a página possui um campo de pesquisa e uma lista paginada de animes.

Já na página de visualização de um anime, além da forte utilização das meta-tags, a página conta com informações extras e relevantes sobre o anime, como a sua classificação(nota) e faixa etária, além disso, o trailer ou banner do anime ganha destaque na página.

## Design

O Design foi pensado para funcionar de forma simples e que fizesse a utilização, ainda que não de forma ideal(devido ao suporte limitado do nextjs) do [Ant Design](https://ant.design/) dessa forma, busquei englobar também o SASS, para facilitar o desenvolvimento do css, busquei utilizar cores neutras para destacar os banners dos animes, que é a peça principal do sistema.

