import Link from "next/link";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import MediaWidget, { heights } from "../components/MediaWidget";
import { MediaItem } from "../lib/interfaces";

interface ShowcaseProps {
  media: MediaItem[];
  columns?: number;
  limit?: number;
  itemHeight?: number;
}

const Showcase = ({
  media,
  columns = 3,
  limit = 6,
  itemHeight = heights.NORMAL,
}: ShowcaseProps): JSX.Element => {
  const [hoveredWidgetId, setHoveredWidgetId] = useState<number | null>(null);

  const getWidgetStyle = (widgetId: number): {} => ({
    filter:
      hoveredWidgetId === null || hoveredWidgetId === widgetId
        ? "brightness(100%)"
        : "brightness(50%)",
  });

  const getShowcaseLinkClass = (widgetId: number): string => {
    return hoveredWidgetId !== widgetId ? "link-muted" : "showcase-link";
  };

  return (
    <Row xs={1} lg={columns} className="g-2 mb-4">
      {media.slice(0, limit).map((item: MediaItem, idx: number) => {
        return (
          <Col key={idx}>
            <MediaWidget
              className="showcase"
              src={item.src}
              height={itemHeight}
              onMouseEnter={() => setHoveredWidgetId(idx)}
              onMouseLeave={() => setHoveredWidgetId(null)}
              style={getWidgetStyle(idx)}
            />

            <aside className="small">
              <Link href={item.path} passHref>
                <a className={getShowcaseLinkClass(idx)}>{item.title}</a>
              </Link>{" "}
              <span className="text-muted">({item.artist})</span>
            </aside>
          </Col>
        );
      })}
    </Row>
  );
};

export default Showcase;
