import ReactVisibilitySensor from "react-visibility-sensor";

export default function withVisibility(WrappedComponent: any) {
  const DecoratedComponent = (props: any) => {
    return (
      <ReactVisibilitySensor>
        <WrappedComponent {...props} />
      </ReactVisibilitySensor>
    );
  };
  return DecoratedComponent;
}
