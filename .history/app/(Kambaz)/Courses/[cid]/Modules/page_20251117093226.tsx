"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import * as client from "../../client";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const [editingModuleName, setEditingModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const onUpdateModule = async (module: any) => {
   await client.updateModule(cid, module);
   const newModules = modules.map((m: any) =>
     m._id === module._id ? module : m
   );
   dispatch(setModules(newModules));
 };


  const onRemoveModule = async (moduleId: string) => {
   await client.deleteModule(cid, moduleId);
   dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
 };


   const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const createdModule = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, createdModule]));
  };

 const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div className="wd-modules">
      <ModulesControls 
        setModuleName={setModuleName} moduleName={moduleName} addModule={onCreateModuleForCourse}
      />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .map((module: any) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
  <FormControl 
    className="w-50 d-inline-block"
    value={editingModuleName}
    onChange={(e) => setEditingModuleName(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") { onUpdateModule({ ...module, name: editingModuleName, editing: false });
      }
    }}

  />
)}
                <ModuleControlButtons 
                  moduleId={module._id}
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
                  editModule={(moduleId) => {
  setEditingModuleName(module.name);
  dispatch(editModule(moduleId));
}} 
                />
              </div>
            
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
