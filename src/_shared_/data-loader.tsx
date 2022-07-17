import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { Fragment } from "react";
import { useQuery } from "react-query";

export default function withLoadingSpinner<T>(
  WrappedComponent: any,
  fetchData: any,
  cacheName: string,
  otherProps: any
) {
  const { isLoading, error, data } = useQuery(cacheName, fetchData);

  return (
    <ComponentDataLoader {...{ isLoading, error, data }}>
      <WrappedComponent
        {...{ data: data as T, ...otherProps }}
      ></WrappedComponent>
    </ComponentDataLoader>
  );
}

interface IDataLoader {
  isLoading: boolean;
  error: any;
  data: any;
  children: any;
}

function ComponentDataLoader({
  isLoading,
  error,
  data,
  children,
}: IDataLoader) {
  if (isLoading)
    return (
      <DivWrapper>
        <CircularProgress />
      </DivWrapper>
    );
  if (error || !data)
    return <DivWrapper>An error has occurred...</DivWrapper>;

  return <Fragment>{children}</Fragment>;
}

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
