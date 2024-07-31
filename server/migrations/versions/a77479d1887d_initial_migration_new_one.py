"""initial migration new one

Revision ID: a77479d1887d
Revises: 059345070ec7
Create Date: 2024-07-30 18:16:46.613221

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a77479d1887d'
down_revision = '059345070ec7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('movie_id', sa.Integer(), nullable=True),
    sa.Column('movie_progress', sa.String(), nullable=True),
    sa.Column('review_score', sa.Float(), nullable=True),
    sa.Column('review', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['movie_id'], ['user_movie_list.id'], name=op.f('fk_review_movie_id_user_movie_list')),
    sa.ForeignKeyConstraint(['movie_progress'], ['list_movies.movie_progress'], name=op.f('fk_review_movie_progress_list_movies')),
    sa.ForeignKeyConstraint(['user_id'], ['user_account.id'], name=op.f('fk_review_user_id_user_account')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_review'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('review')
    # ### end Alembic commands ###
