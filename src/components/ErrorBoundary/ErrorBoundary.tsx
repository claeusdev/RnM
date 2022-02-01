import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasErrored: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log(error);
  }
  render() {
    const { hasErrored } = this.state;

    if (hasErrored) {
      return <section style={{
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh"
      }}>
          <span className='lead'>No character found <Link to={"/"} >Back</Link></span>
      </section>;
    }
    return this.props.children;
  }
}
