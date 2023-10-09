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

package org.netbeans.modules.glassfish.javaee.ui;

import java.awt.Dimension;
import java.awt.Font;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author peterw99
 */
public class DebugPortQuery extends javax.swing.JPanel {

    /** Creates new form DebugPortQuery */
    public DebugPortQuery() {
        initComponents();
    }

    public void setDebugPort(String debugPort) {
        try {
            int port = Integer.valueOf(debugPort);
            if(port > 0 && port < 65536) {
                debugPortSpinner.getModel().setValue(port);
            } else {
                Logger.getLogger("glassfish-javaee").log(
                        Level.INFO, "Debug port out of range in DebugPortQuery");
            }
        } catch(NumberFormatException ex) {
            Logger.getLogger("glassfish-javaee").log(
                    Level.INFO, "Invalid debug port, using default = 9009.", ex);
        }
    }

    public String getDebugPort() {
        Object value = debugPortSpinner.getModel().getValue();
        return value != null ? value.toString() : "";
    }

    public boolean shouldPersist() {
        return noAskCheck.getModel().isSelected();
    }

    @Override
    public Dimension getPreferredSize() {
        // Bump height by 16% because GroupLayout doesn't resize properly when
        // label text uses HTML to wrap lines.
        Dimension preferredSize = super.getPreferredSize();
        preferredSize.height = preferredSize.height * 29 / 25;
        return preferredSize;
    }

    /** This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        debugPortLable = new javax.swing.JLabel();
        debugPortSpinner = new javax.swing.JSpinner();
        noAskCheck = new javax.swing.JCheckBox();

        debugPortLable.setText(org.openide.util.NbBundle.getMessage(DebugPortQuery.class, "DebugPortQuery.debugPortLable.text")); // NOI18N
        debugPortLable.setVerticalTextPosition(javax.swing.SwingConstants.TOP);

        debugPortSpinner.setModel(new javax.swing.SpinnerNumberModel(9009, 1, 65535, 1));

        noAskCheck.setSelected(true);
        noAskCheck.setText(org.openide.util.NbBundle.getMessage(DebugPortQuery.class, "DebugPortQuery.noAskCheck.text")); // NOI18N

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(debugPortLable, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 393, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(6, 6, 6)
                        .addComponent(debugPortSpinner, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(204, 204, 204))
                    .addComponent(noAskCheck, javax.swing.GroupLayout.DEFAULT_SIZE, 393, Short.MAX_VALUE))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(debugPortLable, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(debugPortSpinner, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(noAskCheck, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
        );
    }// </editor-fold>//GEN-END:initComponents


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel debugPortLable;
    private javax.swing.JSpinner debugPortSpinner;
    private javax.swing.JCheckBox noAskCheck;
    // End of variables declaration//GEN-END:variables

}