import * as React from 'react';
import { PageSection, Title, DataList, DataListItemCells, DataListItemRow, DataListCell } from '@patternfly/react-core';
import { events } from '../../events';

const Dashboard: React.FunctionComponent = () => {
  const styledEvents = events.map(({ month, date, subject }) => {
    const monthCell = <DataListCell key={month}>{month}</DataListCell>;
    const dateCell = <DataListCell key={date}>{date}</DataListCell>;
    const nameCell = <DataListCell key={subject}>{subject}</DataListCell>;

    return (
      <DataListItemRow key={month + date + subject}>
        <DataListItemCells dataListCells={[monthCell, dateCell, nameCell]} />
      </DataListItemRow>
    );
  });

  const HeaderRow = () => {
    const monthCell = <DataListCell key="Month">Month</DataListCell>;
    const dateCell = <DataListCell key="Date">Date</DataListCell>;
    const nameCell = <DataListCell key="Event">Event</DataListCell>;

    return (
      <DataListItemRow key="header">
        <DataListItemCells dataListCells={[monthCell, dateCell, nameCell]} />
      </DataListItemRow>
    );
  };

  styledEvents.unshift(HeaderRow());

  return (
    <PageSection>
      <Title headingLevel="h1" size="lg">
        <DataList aria-label="Event schedule">{styledEvents}</DataList>
      </Title>
    </PageSection>
  );
};

export { Dashboard };
