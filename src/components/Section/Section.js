import { Component } from "react";
import { SectionWrapper } from "./Section.styled";

export class Section extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <SectionWrapper>
        <h2>{title}</h2>
        {children}
      </SectionWrapper>
    );
  }
}
