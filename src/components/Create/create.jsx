import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./create.scss";

const CoverMain = forwardRef((props, ref) => {
  return (
    <div className="pageCover" ref={ref}>
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
const PageSingle = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h1 className="page-header">Pages Header</h1>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number}</div>
      </div>
    </div>
  );
});
export default function Create() {
  return (
    <div className="mainCover" style={{ backgroundImage: URL }}>
      <div className="sideCover">
        <HTMLFlipBook width={320} height={500} showCover={true}>
          <CoverMain>{/* Image */}</CoverMain>
          <PageSingle number="1">Start Typing</PageSingle>
          <PageSingle number="2">Start Typing</PageSingle>
          <PageSingle number="3">Start Typing</PageSingle>
          <PageSingle number="4">Start Typing</PageSingle>
          <PageSingle number="5">Start Typing</PageSingle>
          <PageSingle number="6">Start Typing</PageSingle>
          <PageSingle number="7">Start Typing</PageSingle>
          <PageSingle number="8">Start Typing</PageSingle>
          <PageSingle number="9">Start Typing</PageSingle>
          <PageSingle number="10">Start Typing</PageSingle>
        </HTMLFlipBook>
      </div>
    </div>
  );
}