import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

import Column from './Column';
import Row from './Row';

/*
 * Grid forms a grid that
 *   has as many columns as specified
 *   with SomeComponent at each (row, column) pair
 *   which takes props from each item of propItems
 *   which uses keyProp as the key for each column
 *
 * Use:
 *   const propItems = [{someProp, anotherProp}, ..., {someProp, anotherProp}];
 *   const constantProps = {anotherProp, yetAnotherProp};
 *   <Grid
 *     columns={3}
 *     component={SomeComponent}
 *     constantProps={constantProps}
 *     end={SomeEndComponent}
 *     keyProp='somePropName'
 *     propItems={propItems}
 *   />
 *
 * The propItems array should be formatted before passing it into Grid
 */
const Grid = (props) => {
  const {columns: columnCount, component: Component, keyProp, propItems, constantProps, end: End} = props;

  const rowCount = Math.ceil(propItems.length / columnCount);
  const rows = Array.from(Array(rowCount), (row, index) =>
    propItems.slice(index * columnCount, (index * columnCount) + columnCount)
  );

  const lastRowIndex = rows.length - 1;
  const lastRow = rows[lastRowIndex] || [];

  const extraColumnCount = columnCount - lastRow.length - (end ? 1 : 0);
  const endOnNewRow = extraColumnCount === -1;
  const extraColumns = [...Array(endOnNewRow ? columnCount - 1 : extraColumnCount).keys()];

  const {css, styles} = props;
  const combinedStyles = getCombinedStyles(props, styles.grid);

  /* eslint-disable react/no-array-index-key */
  return (
    <div {...combinedStyles}>
      {rows.map((row, rowIndex) => (
        <Row key={`row.${rowIndex}`} {...css(styles.gridRow)}>

          {row.map(props => (
            <Column key={`column.${props[keyProp]}`} {...css(styles.gridColumn)}>
              <Component {...props} {...constantProps} />
            </Column>
          ))}

          {! endOnNewRow && rowIndex === lastRowIndex && end &&
            <Column {...css(styles.gridColumn)}>
              <End />
            </Column>
          }

          {! endOnNewRow && rowIndex === lastRowIndex && extraColumns.map(index =>
            <Column key={`extraColumn.${index}`} {...css(styles.gridColumn)} />
          )}

        </Row>
      ))}

      {endOnNewRow &&
        <Row {...css(styles.gridRow)}>
          <Column {...css(styles.gridColumn)}>
            <End />
          </Column>
          {extraColumns.map(index =>
            <Column key={`extraColumn.${index}`} {...css(styles.gridColumn)} />
          )}
        </Row>
      }
    </div>
  );
  /* eslint-enable react/no-array-index-key */
};

Grid.displayName = 'Grid';

Grid.propTypes = propTypesHandler({
  columns: PropTypes.number.isRequired,
  component: PropTypes.func.isRequired,
  keyProp: PropTypes.string.isRequired,
  propItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  constantProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  end: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object,
}, true);

Grid.defaultProps = {
  constantProps: {},
  end: null,
  className: '',
  style: {},
};

Grid.styles = ({}) => ({
  grid: {

  },
  gridRow: {

  },
  gridColumn: {

  },
});

export default withStyles(Grid);
