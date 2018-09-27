import dataUrl from './service/dataUrl';
import targetSites from './service/targetSites';
const apiUrl = 'http://soy.idg.com.au:4951/api';
export const onSettingsLeave = payload => ({
  type: 'settings/finish',
  payload,
});

export const onMakeChange = value => ({
  type: 'settings/change',
  value,
});
export const onSaveChange = payload => ({
  type: 'settings/save',
  payload,
});
export const onProjectLeave = payload => ({
  type: 'projectState/finish',
  payload,
});

export const projectListSuccess = payload => {
  {
    type: 'projectList/fetch_success';
    payload;
  }
};
export const projectListFail = payload => {
  {
    type: 'projectList/fetch_fail';
    payload;
  }
};
export const projectListRequest = payload => {
  return {
    type: 'projectList/request',
    payload,
  };
};

export const projectListrecive = payload => {
  return {
    type: 'projectList/recive',
    payload,
  };
};
export const templateListRequest = payload => {
  return {
    type: 'templateList/request',
    payload,
  };
};
export const templateListrecive = payload => {
  return {
    type: 'templateList/recive',
    payload,
  };
};

const ajaxProcess = (req, res, url, id) => {
  return dispatch => {
    dispatch(req);
    const fetchUrl = () => {
      return !id ? `${apiUrl}/${url}/` : `${apiUrl}/${url}/${id}`;
    };
    return fetch(fetchUrl(), { method: 'GET' })
      .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(json => {
        res === 'templateListrecive'
          ? dispatch(templateListrecive(json))
          : null;
        res === 'projectListrecive' ? dispatch(projectListrecive(json)) : null;
        if (res === 'projectStateRecive') {
          console.log(json);
          dispatch(projectStateRecive(json));
          dispatch(settingsRecive(targetSites(json)));
          // covert number to target site checked
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchCreateProject = (title, sites, template) => {
  const data = {
    title: title,
    sites: sites,
    template: template,
  };
  return dispatch => {
    console.log('start');
    dispatch(addNewProjectRequest());
    return fetch(`${apiUrl}/pages/`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        dispatch(apendNewProject(json));
        dispatch(projectStateAppendId({ id: json.id }));
        dispatch(addNewProjectRecive());
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };
};

export const fetchTemplatetList = url => {
  return ajaxProcess(templateListRequest(), 'templateListrecive', url);
};
export const fetchProjectList = url => {
  return ajaxProcess(projectListRequest(), 'projectListrecive', url);
};
export const templateListPreviewOpen = payload => {
  return {
    type: 'templateList/previewOpen',
    payload,
  };
};
export const templateListPreviewClose = payload => {
  return {
    type: 'templateList/previewClose',
    payload,
  };
};
export const createProjectOpen = payload => {
  return {
    type: 'templateList/createOpen',
    payload,
  };
};
export const createProjectClose = payload => {
  return {
    type: 'templateList/createClose',
    payload,
  };
};
export const addNewProjectRequest = payload => {
  return {
    type: 'projectList/add/request',
    payload,
  };
};
export const addNewProjectRecive = payload => {
  return {
    type: 'projectList/add/recive',
    payload,
  };
};

export const apendNewProject = payload => {
  return {
    type: 'projectList/append',
    payload,
  };
};
export const fetchProjectState = (url, id) => {
  return ajaxProcess(projectListRequest(), 'projectStateRecive', url, id);
};
//project state action
export const projectStateRequest = payload => {
  return {
    type: 'projectState/request',
    payload,
  };
};
export const projectStateRecive = payload => {
  return {
    type: 'projectState/recive',
    payload,
  };
};
export const projectStateinputUpdate = payload => {
  return {
    type: 'projectState/inputUpdate',
    payload,
  };
};
export const projectStateCustomMediaUpdate = payload => {
  return {
    type: 'projectState/customMediaUpdate',
    payload,
  };
};
export const projectStateSaveingStart = payload => {
  return {
    type: 'projectState/saveingStart',
    payload,
  };
};
export const projectStateSaveingFinish = payload => {
  return {
    type: 'projectState/saveingFinish',
    payload,
  };
};
export const projectStateAppendId = payload => {
  return {
    type: 'projectState/appendId',
    payload,
  };
};
export const projectStateOpenCustomPanel = payload => {
  return {
    type: 'projectState/openCustomPanel',
    payload,
  };
};
export const projectStateCloseCustomPanel = payload => {
  return {
    type: 'projectState/closeCustomPanel',
    payload,
  };
};
export const projectStateChangeCustomItemIndex = payload => {
  return {
    type: 'projectState/changeCustomItemIndex',
    payload,
  };
};
export const projectStateEnableSave = payload => {
  return {
    type: 'projectState/enableSave',
    payload,
  };
};
export const projectStateDisableSave = payload => {
  return {
    type: 'projectState/disableSave',
    payload,
  };
};
export const projectStateShowAlert = payload => {
  return {
    type: 'projectState/showAlert',
    payload,
  };
};
export const projectStateHiddenAlert = payload => {
  return {
    type: 'projectState/hiddenAlert',
    payload,
  };
};
export const projectStateCancelSave = payload => {
  return {
    type: 'projectState/cancelSave',
    payload,
  };
};
export const projectStateAddItem = payload => {
  return {
    type: 'projectState/addItem',
    payload,
  };
};
export const projectStateDeleteItem = payload => {
  return {
    type: 'projectState/deleteItem',
    payload,
  };
};
export const projectStateRemoveImage = payload => {
  return {
    type: 'projectState/removeImage',
    payload,
  };
};
//settings action
export const settingsRecive = payload => ({
  type: 'settings/recive',
  payload,
});

export const settingsOpen = isOpen => ({
  type: 'settings/open',
  isOpen,
});

export const settingsClose = isOpen => ({
  type: 'settings/close',
  isOpen,
});
export const settingsUpdate = payload => ({
  type: 'settings/update',
  payload,
});

export const uploadImage = (
  e,
  customKey,
  itemId,
  itemChildKey,
  inputType,
  handleChange
) => {
  return dispatch => {
    return fetch(`${apiUrl}/images/`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        content_image: e.target.result,
        width: 0,
        height: 0,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(err => {
            console.log(err);
          });
        }
      })
      .then(json => {
        handleChange(
          json.content_image,
          customKey,
          itemId,
          itemChildKey,
          inputType
        );
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };
};

export const updateProject = (id, arg, category, file) => {
  file && dataUrl(file) ? (arg.logo = file) : null; //filter out if not base64 and doesn't exist
  return dispatch => {
    dispatch(projectStateSaveingStart());

    return fetch(`${apiUrl}/pages/${id}/`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(arg),
    })
      .then(response => {
        //console.log(response)
        if (response.ok) {
          return response.json();
        }
      })
      .then(json => {
        console.log(json);
        const d = new Date();
        let time =
          d.getDate() +
          '/' +
          d.getMonth() +
          '/' +
          d.getFullYear() +
          ' ' +
          d.getHours() +
          ':' +
          d.getMinutes();
        dispatch(projectStateSaveingFinish({ saveTime: time }));
        if (category === 'settings') {
          dispatch(settingsRecive(targetSites(json)));
        }
        if (category === 'projectStatePage') {
          dispatch(projectStateRecive(targetSites(json)));
          dispatch(projectStateDisableSave());
        }
        if (category === 'projectStateCustom') {
          dispatch(projectStateRecive(targetSites(json)));
          dispatch(projectStateCloseCustomPanel());
          dispatch(projectStateDisableSave());
        }
      })

      .catch(error => {
        // console.log(JSON.stringify(error))
      });
  };
};
