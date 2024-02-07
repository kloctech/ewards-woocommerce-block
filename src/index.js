import { registerBlockType } from '@wordpress/blocks';
import { Button } from '@wordpress/components';

const attributes = {
    currentUser: {
      type: 'int',
      default: 1
    },
    userData: {
      type: 'object',
      default: {}
    },
    allUserIds: {
      type: 'array',
      default: []
    }
  }

const save = props => {
    return (
      <div className="mt-block-user-card-wrapper" data-mt-attributes={JSON.stringify(props.attributes)}>
        <div className="mt-block-user-card">
            <h1>TEST SAVE</h1>
        </div>
      </div>
    );
}

const edit = props => {
    return (
      <div className="mt-block-user-card-wrapper" data-mt-attributes={JSON.stringify(props.attributes)}>
        <div className="mt-block-user-card">
            <h1>TEST EDIT</h1>
            <Button variant='primary'>Click Me!</Button>
        </div>
      </div>
    );
}

registerBlockType( 'gutenreact/test-block', {
    title: "Test-BLOCK",
    category: "common",
    attributes,
    edit,
    save
} );
