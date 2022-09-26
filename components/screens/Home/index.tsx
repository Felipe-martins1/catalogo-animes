import type { NextPage } from 'next'

import Layout from '../../layout';
import { Button, Carousel, Input, Typography } from 'antd';

import styles from './Home.module.scss'
import { useTrendingAnimes } from '../../../hooks/useTrendingAnimes';
import { useCategories } from '../../../hooks/useCategories';

const { Title, Paragraph, Text } = Typography;

const Home: NextPage = () => {
    const trendintAnimes = useTrendingAnimes()
    const categories = useCategories();
    console.log(categories);

    const posters = trendintAnimes.map((anime) => {
        return anime.attributes.posterImage.original
    });

    return (
    <Layout>
        <section className={styles.hero}>
            <section className={styles.posters}>
                {posters.map((poster) => {
                    return <img src={poster} alt="poster" className={styles.poster} />
                })}
            </section>
            <section className={styles.right}>
                <Paragraph >
                    ANIMELIST
                </Paragraph>
                <Title >
                    The best place to find your favorite anime
                </Title>
                <Paragraph >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl,
                    vitae aliquet nisl nunc nec elit. Sed euismod, nunc ut aliquam
                    aliquam, nunc nisl aliquet nisl, vitae aliquet nisl nunc nec elit.
                </Paragraph>
            </section>
        </section>
        

        <Title style={{color: 'white'}}>
            Trending Animes
        </Title>

        <section className={styles.trendingAnimes}>
            {trendintAnimes.map((anime) => {
                return (
                    <section className={styles.anime}>
                        <h4>{anime.attributes.canonicalTitle}</h4>
                        <img src={anime.attributes.posterImage.original} alt="poster" className={styles.poster} />
                    </section>
                )
            })}
        </section>

        <Title style={{color: 'white'}}>
            Categories
        </Title>

        <section className={styles.categories}>
            {categories.map((category) => {
                return (
                    <Button>
                        {category.attributes.title}
                    </Button>
                )
            })}
        </section>
    </Layout>
)
}

const sliderResponsiveSettings = [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ];

export default Home
