import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { Media } from '@/lib/types';
import styles from './media-section.module.css';
import styleUtils from './utils.module.css';

type Props = {
  media: Media;
};

export default function MediaSection({ media }: Props) {
  return (
    <>
      <Link href="/expo">
        <a className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to expo
        </a>
      </Link>
      <div className={styles.layout}>
        <iframe
          className={cn(styles.video, styleUtils.appear, styleUtils['appear-first'])}
          allow="picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="100%"
          src={`https://youtube.com/embed/${media.youtubeSlug}`}
          title={media.name}
          width="100%"
        />
        <div className={styles.container}>
          <div className={styles['name-and-logo']}>
            <Image
              alt={media.name}
              src={media.logo.url}
              className={styles.image}
              loading="lazy"
              title={media.name}
              height={64}
              width={64}
            />
            <h1 className={styles.name}>{media.name}</h1>
          </div>
          <p className={styles.description}>{media.description}</p>
          <div className={styles['media-details']}>
            <a
              href={media.callToActionLink}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className={styles.button}
            >
              {media.callToAction}
            </a>
            <a
              href={media.discord}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className={cn(styles.button, styles['button-link'])}
            >
              Chat on Discord
            </a>
          </div>
          <div className={styles.resources}>
            <h2 className={styles.heading}>Resources</h2>
            {media.links.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(styles.button, styles['button-resource'])}
              >
                <span className={styles.truncate}>{link.text}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}