# == Schema Information
#
# Table name: episodes
#
#  id          :bigint           not null, primary key
#  description :string
#  title       :string
#  url         :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  section_id  :bigint           not null
#
# Indexes
#
#  index_episodes_on_section_id  (section_id)
#
# Foreign Keys
#
#  fk_rails_...  (section_id => sections.id)
#
class Episode < ApplicationRecord
  belongs_to :section
end
