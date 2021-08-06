class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :title, null: false 
      t.boolean :private
      t.text :description
      t.integer :user_id
      t.timestamps
    end
    add_index :pictures, :user_id
  end
end
