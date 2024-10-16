import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setupAddTask } from "../../../../../../global-redux/reducers/tasks-management/slice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";
import FileUpload from "./file-upload";
import * as Yup from "yup";

// Validation schema
const today = moment.utc().startOf("day");
const validationSchema = Yup.object({
  dueDate: Yup.date()
    .required("Due Date is required")
    .min(today.toDate(), "Due Date must be today or later"),
  engagementId: Yup.string().required("Job is required"),
  userAssigned: Yup.string().required("Assignee is required"),
  detailedRequirement: Yup.string()
    .required("Detailed Requirement is required")
    .max(400, "Detailed Requirement must be 400 characters or less"),
});

const AddInformationRequest = ({ setShowAddInformationRequestDialog }) => {
  const dispatch = useDispatch();
  const [uploads, setUploads] = React.useState([]);
  const { users, auditEngagements, loading, taskAddSuccess } = useSelector(
    (state) => state?.tasksManagement
  );
  const { user } = useSelector((state) => state?.auth);

  // Initial form values
  const initialValues = {
    dueDate: "",
    engagementId: "",
    userAssigned: "",
    detailedRequirement: "",
  };

  const handleSubmit = (values) => {
    if (!loading) {
      dispatch(
        setupAddTask({
          informationRequestAndTaskManagement: {
            dueDate: values?.dueDate,
            status: "string",
            engagementId: Number(values?.engagementId),
            createdBy: Number(user[0]?.userId?.id),
            companyId: Number(user[0]?.userId?.company[0]?.id),
            userAssigned: Number(values?.userAssigned),
            yourResponse: "",
            uploads: [],
            detailedRequirement: values?.detailedRequirement,
          },
          files: uploads?.map((item) => {
            return {
              fileName: item?.fileName,
              fileData: item?.fileData,
            };
          }),
        })
      );
    }
  };

  React.useEffect(() => {
    if (taskAddSuccess) {
      setShowAddInformationRequestDialog(false);
    }
  }, [taskAddSuccess]);

  return (
    <div className="px-4 py-4">
      <header className="section-header my-3 text-start d-flex align-items-center justify-content-between">
        <div className="mb-0 heading d-flex align-items-center">
          <h2 className="heading">Add Information Request</h2>
        </div>
      </header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="row">
              <div className="mb-3 col-lg-12">
                <label>Due Date</label>
                <Field
                  type="date"
                  name="dueDate"
                  className="form-control w-100"
                  placeholder="DD/MM/YYYY"
                />
                <ErrorMessage
                  name="dueDate"
                  component="div"
                  className="text-danger f-14"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-6">
                <label className="me-3">Selected Job</label>
                <Field
                  as="select"
                  name="engagementId"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Select Job</option>
                  {auditEngagements?.map((job, index) => (
                    <option key={index} value={job?.id}>
                      {job?.aetitle}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="engagementId"
                  component="div"
                  className="text-danger f-14"
                />
              </div>
              <div className="col-lg-6">
                <label className="me-3">Selected Assignee</label>
                <Field
                  as="select"
                  name="userAssigned"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Select User</option>
                  {users?.map((user, index) => (
                    <option value={user?.id} key={index}>
                      {user?.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="userAssigned"
                  component="div"
                  className="text-danger f-14"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-12">
                <label>Detailed Requirement</label>
                <Field
                  as="textarea"
                  name="detailedRequirement"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
                <ErrorMessage
                  name="detailedRequirement"
                  component="div"
                  className="text-danger f-14"
                />
                <label className="word-limit-info label-text">
                  Maximum 400 words
                </label>
              </div>
            </div>
            <FileUpload uploads={uploads} setUploads={setUploads} />

            <div className="row mb-2">
              <div className="col-lg-8 align-self-end">
                <button
                  type="submit"
                  className={`btn btn-primary ${loading && "disabled"}`}
                >
                  {loading ? "Loading.." : "Add"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="row mb-2">
        <div className="col-lg-12 align-self-end">
          <button
            type="submit"
            className="btn btn-danger float-end"
            onClick={() => {
              setShowAddInformationRequestDialog(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInformationRequest;
