import * as React from "react";

export interface IMediaItemVersion {
  version: string;
  path: string;
}

export interface IMediaItem extends React.HTMLProps<HTMLDivElement> {
  name: string;
  thumbnail: string;
  versions: IMediaItemVersion[];
}

const MediaItem = ({thumbnail, versions, name}: IMediaItem) => {
  return (
    <div style={{textAlign: "center", display: "flex", flexDirection: "column", height: "100%"}}>
      <div style={{backgroundColor: "lightgray", padding: "1rem", flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={thumbnail} style={{maxHeight: "150px", maxWidth: "100%"}}/>
      </div>
      <div>
        {versions.map((v) => <a style={{margin: "0rem 1rem"}} href={v.path} key={v.version} download={name}>{v.version}</a>)}
      </div>
    </div>
  );
};

export default MediaItem;
