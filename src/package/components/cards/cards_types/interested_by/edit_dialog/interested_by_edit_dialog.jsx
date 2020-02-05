import React, { useMemo } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import { TextField } from '@wld/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';

const InterestedByEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            open={open}
            onClose={onClose}
            data={data}
            onEdit={onEdit}
            validationSchema={validationSchemaToPass}
            title={(
                <FormattedMessage
                    id="InterestedBy.editDialog.title"
                    defaultMessage="What technologies are you interested in?"
                />
            )}
        >
            {helpers => <Content helpers={helpers} />}
        </EditDialog>
    );
};

const Content = () => {
    const { values, errors, handleChange } = useFormikContext();
    const { interestedBy } = values;

    return (
        <>
            <EditDialogField error={errors?.interestedBy}>
                <TextField
                    multiline
                    variant="flat"
                    fullWidth
                    rows={4}
                    placeholder={(
                        <FormattedMessage
                            id="InterestedBy.editDialog.interestedBy.placeholder"
                            defaultMessage="Vue.js, Blockchain, Datadog..."
                        />
                    )}
                    value={interestedBy}
                    onChange={handleChange}
                    name="interestedBy"
                />
            </EditDialogField>
        </>
    );
};

export const InterestedByEditDialog = InterestedByEditDialogComponent;
