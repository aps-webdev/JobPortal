import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getRequest } from '../../utils/requests/request';

export const useRecruiterController = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState({ page: 1 });
  const [postedJobs, setPostedJobs] = useState([]);
  const [metaData, setMetaData] = useState({});
  const { pathname } = useLocation();
  let history = useHistory();

  useEffect(() => {
    getRequest('recruiters/jobs', pageNumber).then((response) => {
      setPostedJobs([...response.data.data]);
      setMetaData(response.data.metaData);
    });
  }, [pageNumber]);

  const handlePostJob = () => {
    history.push(`${pathname}/postjob`);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return {
    isModalOpen,
    handlePostJob,
    toggleModal,
    postedJobs,
    metaData,
  };
};
