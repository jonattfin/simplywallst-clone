import {
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
  useQuery,
} from "@apollo/client";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { Fragment } from "react";

interface IWithLoadingSpinner<T> {
  WrappedComponent: any;
  query: DocumentNode | TypedDocumentNode<T, OperationVariables>;
  variables?: {};
  otherProps?: {};
}

export default function WithLoadingSpinner<T>({
  WrappedComponent,
  query,
  variables = {},
  otherProps = {},
}: IWithLoadingSpinner<T>) {
  const { loading, error, data } = useQuery<T>(query, { variables });

  return (
    <ComponentDataLoader {...{ isLoading: loading, error, data }}>
      <WrappedComponent {...{ data, ...otherProps }} />
    </ComponentDataLoader>
  );
}

interface IDataLoader<T> {
  isLoading: boolean;
  error: any;
  data: T;
  children: any;
}

function ComponentDataLoader<T>({
  isLoading,
  error,
  data,
  children,
}: IDataLoader<T>) {
  if (isLoading)
    return (
      <DivWrapper>
        <CircularProgress />
      </DivWrapper>
    );
  if (error || !data) return <DivWrapper>An error has occurred...</DivWrapper>;

  return <Fragment>{children}</Fragment>;
}

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20vh;
`;
