/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package org.netbeans.modules.web.wizards;

import java.awt.Component;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import org.netbeans.api.j2ee.core.Profile;
import org.netbeans.api.java.classpath.ClassPath;
import org.netbeans.api.project.ProjectUtils;
import org.openide.WizardDescriptor;
import org.openide.util.HelpCtx;
import org.openide.loaders.TemplateWizard;
import org.netbeans.api.project.Project;
import org.netbeans.api.project.Sources;
import org.netbeans.api.project.SourceGroup;
import org.netbeans.api.java.project.JavaProjectConstants;
import org.netbeans.spi.project.ui.templates.support.Templates;
import org.netbeans.modules.web.api.webmodule.WebModule;

/** A single panel descriptor for a wizard.
 * You probably want to make a wizard iterator to hold it.
 *
 * @author  Milan Kuchtiak
 */
// @todo: Support JakartaEE
public class ListenerPanel implements WizardDescriptor.Panel {
    
    /** The visual component that displays this panel.
     * If you need to access the component from this class,
     * just use getComponent().
     */
    private ListenerVisualPanel component;
    private transient TemplateWizard wizard;

    private static final String SERVLET_CONTEXT_LISTENER = "javax.servlet.ServletContextListener";    //NOI18N
    private static final String SERVLET_CONTEXT_ATTRIBUTE_LISTENER = "javax.servlet.ServletContextAttributeListener";    //NOI18N
    private static final String HTTP_SESSION_LISTENER = "javax.servlet.http.HttpSessionListener";    //NOI18N
    private static final String HTTP_SESSION_ATTRIBUTE_LISTENER = "javax.servlet.http.HttpSessionAttributeListener";    //NOI18N
    private static final String SERVLET_REQUEST_LISTENER = "javax.servlet.ServletRequestListener";    //NOI18N
    private static final String SERVLET_REQUEST_ATTRIBUTE_LISTENER = "javax.servlet.ServletRequestAttributeListener";    //NOI18N

    /** Create the wizard panel descriptor. */
    public ListenerPanel(TemplateWizard wizard) {
        this.wizard=wizard;
    }
    
    // Get the visual component for the panel. In this template, the component
    // is kept separate. This can be more efficient: if the wizard is created
    // but never displayed, or not all panels are displayed, it is better to
    // create only those which really need to be visible.
    public Component getComponent() {
        if (component == null) {
            Project project = Templates.getProject( wizard );
            Sources sources = ProjectUtils.getSources(project);
            SourceGroup[] groups = sources.getSourceGroups(JavaProjectConstants.SOURCES_TYPE_JAVA);
            WebModule wm=null;
            Profile j2eeVersion = Profile.J2EE_14;
            if (groups!=null && groups.length>0) {
                wm = WebModule.getWebModule(groups[0].getRootFolder());
            }
            if (wm!=null) {
                j2eeVersion=wm.getJ2eeProfile();
            }
            component = new ListenerVisualPanel(this,j2eeVersion);
        }
        return component;
    }
    
    public HelpCtx getHelp() {
        //return new HelpCtx(ListenerPanel.class);
        return HelpCtx.DEFAULT_HELP;
    }
    
    public boolean isValid() {
	if(!isListenerSelected()) {
            wizard.putProperty(WizardDescriptor.PROP_ERROR_MESSAGE, //NOI18N
                org.openide.util.NbBundle.getMessage(ListenerPanel.class,"MSG_noListenerSelected"));
            return false;
	}
        Project project = Templates.getProject(wizard);
        Sources sources = ProjectUtils.getSources(project);
        SourceGroup[] groups = sources.getSourceGroups(JavaProjectConstants.SOURCES_TYPE_JAVA);
        ClassPath cp = null;
        String resource = null;
        if (groups !=null && groups.length!=0) {
            cp = ClassPath.getClassPath(groups[0].getRootFolder(), ClassPath.COMPILE);
            if (isContextListener()) {
                resource = SERVLET_CONTEXT_LISTENER;
            } else if(isContextAttrListener()) {
                resource = SERVLET_CONTEXT_ATTRIBUTE_LISTENER;
            } else if (isSessionListener()) {
                resource = HTTP_SESSION_LISTENER;
            } else if (isSessionAttrListener()) {
                resource = HTTP_SESSION_ATTRIBUTE_LISTENER;
            } else if (isRequestListener()) {
                resource = SERVLET_REQUEST_LISTENER;
            } else if (isRequestAttrListener()) {
                resource = SERVLET_REQUEST_ATTRIBUTE_LISTENER;
            }
        }
        if (cp != null && resource != null && cp.findResource(resource.replace('.', '/')+".class")==null) {  //NOI18N
            wizard.putProperty(WizardDescriptor.PROP_ERROR_MESSAGE,org.openide.util.NbBundle.getMessage(ListenerPanel.class, "MSG_noResourceInClassPath", resource));
            return false;
        }

        WebModule module = WebModule.getWebModule(project.getProjectDirectory());
        if (createElementInDD() && (module == null || module.getWebInf() == null)) {
            wizard.putProperty(WizardDescriptor.PROP_WARNING_MESSAGE,org.openide.util.NbBundle.getMessage(ListenerPanel.class, "MSG_noWebInfDirectory", resource)); //NOI18N
            return true;
        }

        wizard.putProperty(WizardDescriptor.PROP_ERROR_MESSAGE, ""); //NOI18N
        wizard.putProperty(WizardDescriptor.PROP_WARNING_MESSAGE, ""); //NOI18N
        return true;
    } 
    
    // FIXME: use org.openide.util.ChangeSupport for ChangeListeners
    private final Set<ChangeListener> listeners = new HashSet<ChangeListener>(1);
    
    public final void addChangeListener (ChangeListener l) {
        synchronized (listeners) {
            listeners.add (l);
        }
    }
    public final void removeChangeListener (ChangeListener l) {
        synchronized (listeners) {
            listeners.remove (l);
        }
    }
    protected final void fireChangeEvent () {
        Iterator<ChangeListener> it;
        synchronized (listeners) {
            it = new HashSet<ChangeListener>(listeners).iterator ();
        }
        ChangeEvent ev = new ChangeEvent (this);
        while (it.hasNext ()) {
            it.next().stateChanged(ev);
        }
    }

    
    // You can use a settings object to keep track of state.
    // Normally the settings object will be the WizardDescriptor,
    // so you can use WizardDescriptor.getProperty & putProperty
    // to store information entered by the user.
    public void readSettings(Object settings) {
    }
    public void storeSettings(Object settings) {
    }
    boolean createElementInDD (){
        return component.createElementInDD();
    }
    
    boolean isContextListener() {return component.isContextListener();}
    
    boolean isContextAttrListener() {return component.isContextAttrListener();}
    
    boolean isSessionListener() {return component.isSessionListener();}
    
    boolean isSessionAttrListener() {return component.isSessionAttrListener();}
    
    boolean isRequestListener() {return component.isRequestListener();}
    
    boolean isRequestAttrListener() {return component.isRequestAttrListener();}

    boolean isListenerSelected() {
        return isContextListener() || isContextAttrListener() ||
            isSessionListener() || isSessionAttrListener() || 
            isRequestListener() || isRequestAttrListener();
    }
}
