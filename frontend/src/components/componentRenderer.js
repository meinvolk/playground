import React from "react";
import HeroCarousel from "./hero/heroCarousel";
import CallToAction from "./callToAction/callToActionBlock";
import RichText from "./richText/richText"

const Components = {
    cms_ComponentComponentHeroCarousel: HeroCarousel,
    cms_ComponentComponentCallToAction: CallToAction,
    cms_ComponentComponentRichTextField: RichText
};

export default block => {
    // component does exist
    if (typeof Components[block.__typename] !== "undefined") {
        return React.createElement(Components[block.__typename], {
            key: block.id,
            block: block
        });
    }
    // component doesn't exist yet
    return React.createElement(
        () => <div>The component {block.__typename} has not been created yet.</div>,
        { key: block.id }
    );
}