import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { Media } from '@/lib/types';
import styles from './medias-grid.module.css';

function MediaCard({ media }: { media: Media }) {
  return (
    <Link key={media.name} href={`/expo/${media.slug}`}>
      <a
        role="button"
        tabIndex={0}
        className={cn(styles.card, {
          [styles.diamond]: media.tier === 'diamond',
          [styles.gold]: media.tier === 'gold'
        })}
      >
        <div className={styles.imageWrapper}>
          <Image
            alt={media.name}
            src={media.cardImage.url}
            className={cn(styles.image, {
              [styles.silver]: media.tier === 'silver'
            })}
            loading="lazy"
            title={media.name}
            width={900}
            height={500}
          />
        </div>
        {media.tier !== 'silver' && (
          <div className={styles.cardBody}>
            <div>
              <h2 className={styles.name}>{media.name}</h2>
              <p className={styles.description}>{media.description}</p>
            </div>
          </div>
        )}
      </a>
    </Link>
  );
}

type Props = {
  medias: Media[];
};

export default function MediasGrid({ medias }: Props) {
  const silverMedias = medias.filter(s => s.tier === 'silver');
  const otherMedias = medias.filter(s => s.tier !== 'silver');

  return (
    <>
      <div className={styles.grid}>
        {otherMedias.map(media => (
          <MediaCard key={media.name} media={media} />
        ))}
      </div>
      <div className={styles.grid}>
        {silverMedias.map(media => (
          <MediaCard key={media.name} media={media} />
        ))}
      </div>
    </>
  );
}
