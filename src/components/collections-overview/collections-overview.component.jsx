import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import PreviewCollection from "../preview-collection/preview-collection.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overivew">
    {
      (console.log(collections),
      collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection
          key={id}
          {...otherCollectionProps}
        ></PreviewCollection>
      )))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
